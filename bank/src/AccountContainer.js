import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const AccountContainer = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(err => console.error(err));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank Transaction App</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default AccountContainer;
