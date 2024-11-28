import React from 'react';
import CardGrid from './components/CardGrid';
import { cardData } from './data/cardData';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <CardGrid cards={cardData} />
    </div>
  );
}

export default App;