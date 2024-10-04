import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div style={styles.container}>
      <h1>Ron Swanson Quotes</h1>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <button style={styles.button} onClick={fetchQuote}>
        Get New Quote
      </button>
      <QuoteList savedQuotes={savedQuotes} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px 0',
  },
};

export default App;
