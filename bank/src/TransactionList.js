

import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.id} - {transaction.name} 
            <button onClick={() => onDelete(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
