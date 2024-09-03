import logo from './logo.svg';
import './App.css';

import Expense from "./components/Expenses/Expense";
import NewExpense from './components/NewExpenses/NewExpense';


const App = () => {

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
    <NewExpense/>
    <Expense expenses={expenses}/>
    </div>  
  );
}

export default App;
