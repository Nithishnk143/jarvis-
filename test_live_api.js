async function testEndpoints() {
  const baseURL = 'https://jarvis-backend-e31w.onrender.com/api';
  
  try {
    console.log('Registering test user...');
    // Register
    let res = await fetch(`${baseURL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Testy Tester',
        email: `test${Date.now()}@test.com`,
        password: 'password123',
        userType: 'twelfth'
      })
    });
    
    let db = await res.json();
    const token = db.token;
    console.log('✅ Registered! Token acquired.', token ? 'Yes' : 'No');

    // Test Scholarships
    console.log('Testing Scholarships...');
    let schRes = await fetch(`${baseURL}/scholarships`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Scholarships status:', schRes.status);
    let schData = await schRes.json();
    console.log('✅ Scholarships data length:', schData.length);

    // Test Mentors
    console.log('Testing Mentors...');
    let mentRes = await fetch(`${baseURL}/mentors`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Mentors status:', mentRes.status);
    let mentData = await mentRes.json();
    console.log('✅ Mentors data length:', mentData.length);

  } catch (err) {
    console.error('❌ Error Occurred:', err.message);
  }
}

testEndpoints();
