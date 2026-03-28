const { GoogleGenAI } = require('@google/genai');

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

    // 1. Validate environment
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim();
    if (!GEMINI_API_KEY) {
      console.error('CRITICAL: GEMINI_API_KEY is missing from environment variables.');
      return res.status(500).json({ message: 'GEMINI_API_KEY is not configured on the server. Please add it to your Render environment variables.' });
    }

    // 2. Format student data
    console.log('AI Evaluation Request for type:', userType);
    const basePrompt = PROMPT_TEMPLATES[userType] || PROMPT_TEMPLATES['twelfth'];
    const formattedAnswers = answers
      .map((ans, idx) => `Q${idx + 1}: ${ans.question}\nAnswer: ${ans.selectedOption}`)
      .join('\n\n');

    const finalPrompt = `${basePrompt}\n\nHere are the student's answers to the psychometric test:\n${formattedAnswers}\n\n${JSON_SCHEMA}`;

    // 3. Initialize SDK
    console.log('Initializing GoogleGenAI SDK...');
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    
    // 4. Call Model
    console.log('Calling gemini-1.5-flash-latest model...');
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash-latest',
      contents: finalPrompt,
      config: {
        temperature: 0.7,
        responseMimeType: 'application/json',
      }
    });

    console.log('Raw response received from Gemini.');
    const aiTextResponse = response.text;
    
    if (!aiTextResponse || Object.keys(aiTextResponse).length === 0) {
      throw new Error("Gemini API returned an empty response. Check if your API Key has access.");
    }
    
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
    
    let errorMessage = err.message || 'An unexpected error occurred during AI evaluation.';
    
    // Attempt to extract error message from common SDK error formats
    try {
      // Handle "ApiError: {"error":{...}}" format seen in logs
      if (errorMessage.includes('{"error":')) {
        const jsonPart = errorMessage.substring(errorMessage.indexOf('{'));
        const parsed = JSON.parse(jsonPart);
        if (parsed.error && parsed.error.message) {
          errorMessage = parsed.error.message;
        }
      } else if (errorMessage.startsWith('{')) {
        const parsed = JSON.parse(errorMessage);
        if (parsed.error && parsed.error.message) {
          errorMessage = parsed.error.message;
        }
      }
    } catch (e) {
      console.log('Failed to parse error JSON, using raw message');
    }
    
    res.status(500).json({ message: errorMessage });
  }
};

module.exports = { evaluatePsychometricTest };
