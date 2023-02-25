import './App.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [quoteData, setQuoteData] = useState({});
  const [buttonColor, setButtonColor] = useState('blue');

// Define a function to get a random quote from the API
const fetchRandomQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const { content, author } = response.data;
    return { content, author };
    } catch (error) {
      console.error(error);
      return { content: 'Sorry, something went wrong', author: 'Unknown' };
    }
  }

  // Use the useEffect hook to get a random quote when the component mounts
  useEffect(() => {
    const fetchQuote = async () => {
      const { content, author } = await fetchRandomQuote();
      setQuoteData({ content, author });
    };
    fetchQuote();
  }, []);
  
  // Define a function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Define a function to handle the button click event
  const handleClick = async () => {
    const { content, author } = await fetchRandomQuote();
    setQuoteData({ content, author });
    const randomColor = getRandomColor();
    setButtonColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  }

  // Render the App component
  return (
      <div id="quote-box">
        <div id="text">
          <p style={{ color: buttonColor }}>
            <i className="fa fa-quote-left"></i>
            {quoteData.content}</p>
        </div>
        <div id="author">
          <p style={{ color: buttonColor }}>
            - {quoteData.author}</p>
        </div>
        <div id="buttons">
          <a id="tweet-quote" 
            href="https://twitter.com/intent/tweet" 
            target="_blank" rel="noreferrer">
            <button className='btn-quote' 
              style={{ backgroundColor: buttonColor }}>
              <i className="fa fa-twitter"></i>
            </button>
          </a>
          <button id="new-quote" 
            onClick={handleClick} 
            className="btn-quote" 
            style={{ backgroundColor: buttonColor }}>
            New Quote
          </button>
        </div>
      </div>
  );
}

export default App;