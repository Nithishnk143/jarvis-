// AI Psychometric Evaluator
const PROMPT_TEMPLATES = {
  tenth: `You are an expert career counselor. Analyze the following psychometric test answers for a 10th-grade student and recommend the best academic stream (Science, Commerce, or Arts).`,
  twelfth: `You are an expert career counselor. Analyze the following psychometric test answers for a 12th-grade student and recommend the best specific undergraduate degree specialization. If they lean towards engineering, you MUST specify the exact branch (e.g., CSE, AI/DS, ECE, EEE, Mechanical, Civil, Aerospace). If they lean towards Medical (MBBS, BDS) or Arts/Humanities, specify that. Give a highly targeted recommendation.`,
  ug: `You are an expert career counselor. Analyze the psychometric test answers for an undergraduate (UG) student and recommend their ideal career path. You MUST specify top global job roles they should target (e.g., Software Engineer, Data Scientist, Product Manager, VLSI/Embedded Engineer, Financial Analyst, etc.) OR recommend an MS/M.Tech/MBA if they lean towards higher ed. Give highly specific job positions available worldwide.`,
  pg: `You are an expert career counselor. Analyze the psychometric test answers for a postgraduate candidate. Recommend their exact specialized Master's path (e.g., MS/M.Tech in CSE, MBA in Finance, Ph.D. in Physics) AND suggest 2-3 specific, high-paying global job roles they can pursue worldwide after completing it (e.g., Chief Technology Officer, Quantitative Analyst, Lead ML Researcher, etc.).`,
  professional: `You are an expert career counselor. Analyze the psychometric test answers for a working professional and recommend a tailored upskilling target or career pivot. You MUST strictly specify if they should upskill into Data Analytics, Machine Learning/AI Engineering, Cloud Architecture, DevOps, Cybersecurity, Full Stack Web, Mobile Dev, Product Management, UI/UX, or Data Engineering. Give a highly targeted role recommendation and a brief roadmap.`
};

const JSON_SCHEMA = `
RESPOND ONLY WITH VALID JSON. DO NOT wrap the JSON in markdown blocks like \`\`\`json. DO NOT add any extra text or conversational filler.
The JSON must strictly follow this exact structure:
{
  "recommendedPath": "Name of the recommended stream/degree/job/path",
  "confidenceScore": 95,
  "description": "A 2-3 sentence personalized explanation of why this is the best fit based on the user's specific answers.",
  "topTraits": ["Trait 1 identified from test", "Trait 2", "Trait 3"],
  "recommendedCareers": ["Career 1", "Career 2", "Career 3"],
  "nextSteps": ["Actionable step 1", "Actionable step 2"],
  "color": "primary", 
  "icon": "bi-star-fill"
}
`;

const evaluatePsychometricTest = async (req, res) => {
  try {
    const { userType, answers } = req.body;
    
    if (!userType || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Invalid test payload' });
    }

    const basePrompt = PROMPT_TEMPLATES[userType] || PROMPT_TEMPLATES['twelfth'];
    
    // Format the user's answers into a readable string for the AI
    const formattedAnswers = answers
      .map((ans, idx) => `Q${idx + 1}: ${ans.question}\nAnswer: ${ans.selectedOption}`)
      .join('\n\n');

    const finalPrompt = `${basePrompt}\n\nHere are the student's answers to the psychometric test:\n${formattedAnswers}\n\n${JSON_SCHEMA}`;

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim();
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured on the server. Please add it to your Render environment variables.');
    }

    // Call Google Gemini API (Using v1 stable endpoint and explicit model name)
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: finalPrompt }]
        }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json",
        }
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(`Gemini API Error: ${errData.error?.message || response.statusText}`);
    }

    const aiData = await response.json();
    const aiTextResponse = aiData.candidates[0].content.parts[0].text;
    
    // Parse the JSON string returned by Gemini
    let resultJson;
    try {
      resultJson = JSON.parse(aiTextResponse);
    } catch (parseError) {
      // Fallback cleanup if the LLM output markdown code blocks despite instructions
      const cleanString = aiTextResponse.replace(/```json/g, '').replace(/```/g, '').trim();
      resultJson = JSON.parse(cleanString);
    }

    // Attach user metadata securely
    res.json({
      success: true,
      data: resultJson
    });

  } catch (err) {
    console.error('AI Error:', err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { evaluatePsychometricTest };
