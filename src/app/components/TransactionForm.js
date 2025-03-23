// components/TransactionForm.js
import { useState } from 'react';

export default function TransactionForm({ addTransaction }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addTransaction(name, amount);
      setName('');
      setAmount('');
    } else {
      alert('Por favor, preencha nome e valor da transação!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome da transação"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Valor</label>
        <input
          type="number"
          placeholder="Valor da transação"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}
