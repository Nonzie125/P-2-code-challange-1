import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import Search from './Search';

const AccountContainer = () => {
  const [transactions, setTransactions] = useState([]);
   // State that will hold the search to filter transactions
  const [searchTerm, setSearchTerm] = useState('');

  // i will fetch data on the bank transactions
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(err => console.error(err));
  }, []);
// Function for a new transaction 
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  //Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };
 // Filtered transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank Transaction App</h1>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default AccountContainer;
