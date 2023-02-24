import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [quoteData, setQuoteData] = useState({});

const getRandomQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const { content, author } = response.data;
    return { content, author };
    } catch (error) {
      console.error(error);
      return { content: 'Sorry, something went wrong', author: 'Unknown' };
    }
  }
  
  const handleClick = async () => {
    const { content, author } = await getRandomQuote();
    setQuoteData({ content, author });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{quoteData.content}</p>
        <p>- {quoteData.author}</p>
        <button onClick={handleClick}>Get Random Quote</button>
      </header>
    </div>
  );
}


export default App;
