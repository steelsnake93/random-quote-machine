import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const fetchQuote = async () => {
      const { content, author } = await getRandomQuote();
      setQuoteData({ content, author });
    };
    fetchQuote();
  }, []);
  
  const handleClick = async () => {
    const { content, author } = await getRandomQuote();
    setQuoteData({ content, author });
  }

  return (
      <div id="quote-box">
        <div id="text">
          <p>{quoteData.content}</p>
        </div>
        <div id="author">
          <p>{quoteData.author}</p>
        </div>
        <div id="buttons">
          <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
          <button id="new-quote" onClick={handleClick}>New Quote</button>
        </div>
      </div>
  );
}


export default App;
