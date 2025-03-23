// components/BalanceDisplay.js
export default function BalanceDisplay({ transactions }) {
    const calculateBalance = () => {
      const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
      const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0).toFixed(2);
      const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0).toFixed(2);
  
      return { total, income, expense };
    };
  
    const { total, income, expense } = calculateBalance();
  
    return (
      <div>
        <h3>Saldo Atual</h3>
        <h1>R$ {total}</h1>
        <div>
          <div>Receitas: R$ {income}</div>
          <div>Despesas: R$ {expense}</div>
        </div>
      </div>
    );
  }
  