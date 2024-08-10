import React, { useState } from 'react';

// Function to adding new transactions
const TransactionForm = ({ onAdd }) => {
  const [transaction, setTransaction] = useState('');
// Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
       // Call the onAdd function passed from the parent component with a new transaction object
    onAdd({ id: Date.now(), name: transaction });
     // Clear the input field after submission
    setTransaction('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={transaction}
        onChange={(e) => setTransaction(e.target.value)}
        placeholder="Enter transaction"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
