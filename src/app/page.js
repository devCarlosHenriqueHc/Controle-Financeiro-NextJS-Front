'use client';

import { useEffect, useState } from 'react';
import BalanceDisplay from './components/BalanceDisplay';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

const API_URL = "http://localhost:8080/api/v1/transactions";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  
  const fetchTransactions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (transactionName, transactionAmount) => {
    const transaction = { name: transactionName, amount: Number(transactionAmount) };
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
      });
      fetchTransactions();
    } catch (error) {
      console.error('Erro ao adicionar transação:', error);
    }
  };

  const removeTransaction = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTransactions();
    } catch (error) {
      console.error('Erro ao remover transação:', error);
    }
  };

  return (
    <div className="container">
      <h1>Controle de Despesas</h1>
      <BalanceDisplay transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
    </div>
  );
}
