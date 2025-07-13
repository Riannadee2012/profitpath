import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleNext = () => {
    if (step === 2) {
      generateRecommendations();
    }
    setStep(step + 1);
  };

  const generateRecommendations = () => {
    const parsedBudget = parseFloat(budget);
    if (isNaN(parsedBudget)) return;

    const results = [];

    if (parsedBudget >= 5000) {
      results.push({
        title: 'Rent a Car on Turo',
        description: 'Buy a reliable SUV for $8,000 and earn ~$650/month renting on Turo.',
        type: 'Cash Flow',
      });
    }

    if (parsedBudget >= 20000) {
      results.push({
        title: 'Buy an Airbnb Property',
        description: 'Put $20K down on a $100K house and generate $1,200/month gross rent.',
        type: 'Equity + Income',
      });
    }

    if (parsedBudget >= 1000) {
      results.push({
        title: 'Buy a Website on Flippa',
        description: 'Purchase a small content site making $100/month for ~$1,500.',
        type: 'Digital Asset',
      });
    }

    if (results.length === 0) {
      results.push({
        title: 'Start with Digital Products',
        description: 'Use $500 to create and sell an eBook or course on Gumroad.',
        type: 'Low Cost Start',
      });
    }

    setRecommendations(results);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>ProfitPath</h1>

      {step === 1 && (
        <div>
          <h2>How much do you want to invest?</h2>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <br /><br />
          <button onClick={handleNext} style={{ padding: '0.5rem 1rem' }}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>What's your goal?</h2>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          >
            <option value="">Select a goal</option>
            <option value="cashflow">Fast Cash Flow</option>
            <option value="equity">Build Equity</option>
            <option value="passive">Passive Income</option>
          </select>
          <br /><br />
          <button onClick={handleNext} style={{ padding: '0.5rem 1rem' }}>See Results</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Top Opportunities</h2>
          {recommendations.map((rec, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <h3>{rec.title}</h3>
              <p>{rec.description}</p>
              <strong>Type: {rec.type}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
