import React from 'react';

const QuoteList = ({ savedQuotes }) => {
  return (
    <div>
      <h2>Saved Quotes</h2>
      {savedQuotes.length === 0 ? (
        <p>No quotes saved yet.</p>
      ) : (
        savedQuotes.map((quote, index) => (
          <div key={index} style={styles.savedCard}>
            <p>{quote}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  savedCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
};

export default QuoteList;
