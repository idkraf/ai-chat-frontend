import React, { useState } from 'react';
import axios from 'axios';

const ChatScenario: React.FC = () => {
  const [location, setLocation] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/travel-plan', { location, prompt });
      setResponse(res.data.gptResponse || res.data.weatherData);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div>
      <h1>Smart Travel Planner</h1>
      <div>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="What do you need? (e.g., plan a 3-day trip)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button onClick={handleSend}>Send</button>
      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default ChatScenario;
