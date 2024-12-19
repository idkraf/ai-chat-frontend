import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface.tsx';
import ChatScenario from './components/ChatScenario.tsx';

const App: React.FC = () => {
  const [showScenario, setShowScenario] = useState(false);

  return (
    <div>
      <header>
        <h1>AI Chat App</h1>
        <button onClick={() => setShowScenario(!showScenario)}>
          {showScenario ? 'Switch to Chat Interface' : 'Switch to Travel Planner'}
        </button>
      </header>
      <main>
        {showScenario ? <ChatScenario /> : <ChatInterface />}
      </main>
    </div>
  );
};

export default App;
