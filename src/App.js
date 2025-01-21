import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Placement from './placement';
import './App.css';
import Details from './Details';
import Prefooter from './Prefooter';
import Data from './Data';
import './App.css'
import Footer from './Footer';
import FormPage from './FormPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cards, setCards] = useState([]);
  const [stats, setStats] = useState({ placed: 0, unplaced: 0 });

  const addCard = (newCard) => {
      setCards([...cards, newCard]);
      updateStats(newCard.status, 1);
  };

  const deleteCard = (index) => {
      const removedStatus = cards[index].status;
      setCards(cards.filter((_, i) => i !== index));
      updateStats(removedStatus, -1);
  };

  const updateStats = (status, value) => {
      setStats((prev) => ({
          ...prev,
          [status.toLowerCase()]: prev[status.toLowerCase()] + value,
      }));
  };

  return (
      <div className="App">
          <Navbar onAdminClick={() => setCurrentPage('admin')} onHomeClick={() => setCurrentPage('home')} />

          {currentPage === 'home' ? (
              <>
                  <Hero />
                  <Placement stats={stats} />
                  <Details />
                  <Prefooter />
                  <Data stats={stats} /> 
                  <Footer />
              </>
          ) : (
              <FormPage addCard={addCard} cards={cards} deleteCard={deleteCard} />
          )}
      </div>
  );
}

export default App;
