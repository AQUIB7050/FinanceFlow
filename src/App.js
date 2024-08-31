import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      title:"Car Insureance",
      amount:1000,
      date: new Date(2024,8,30)
    },
    {
      title:"Grocery",
      amount:700,
      date: new Date(2024,5,21)

    },
    {
      title:"Garden Repair",
      amount:100,
      date: new Date(2024,9,1)
    }
  ]

  return (   
    <div>
        <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}>
        </ExpenseItem>

        <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
        </ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
