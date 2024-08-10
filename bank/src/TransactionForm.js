
import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [transaction, setTransaction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), name: transaction });
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
