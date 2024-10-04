import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div style={styles.card}>
      <p>{quote}</p>
      <button style={styles.button} onClick={() => onSave(quote)}>
        Save to List
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QuoteCard;
