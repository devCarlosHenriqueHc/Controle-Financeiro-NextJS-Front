import React from 'react';

export default function TransactionList({ transactions, removeTransaction }) {
    return (
      <ul>
        {transactions.map(({ id, name, amount }) => {
          const operator = amount < 0 ? '-' : '+';
          const CSSClass = amount < 0 ? 'minus' : 'plus';
          const amountWithoutOperator = Math.abs(amount);
  
          return (
            <li key={id} className={CSSClass}>
              {name} 
              <span>{operator} R$ {amountWithoutOperator}</span>
              <button onClick={() => removeTransaction(id)}>x</button>
            </li>
          );
        })}
      </ul>
    );
  }
  