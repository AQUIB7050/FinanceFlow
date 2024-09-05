import './App.css';
import {useState} from 'react';

import Expense from "./components/Expenses/Expense";
import NewExpense from './components/NewExpenses/NewExpense';


const App = () => {

  const expenses = [
    {
      id:'9b',
      title:"Car Insureance",
      amount:1000,
      date: new Date(2024,8,30)
    },
    {
      id:'1c',
      title:"Grocery",
      amount:700,
      date: new Date(2024,5,21)

    },
    {
      id:'2a',
      title:"Garden Repair",
      amount:100,
      date: new Date(2024,9,1)
    }
  ]

  const [myExpenses,setExpense] = useState(expenses);

  const handleFormSubmit = (expenses) =>{
    setExpense((prevExp) => {
      return [expenses, ...prevExp]
    });
  }


  return ( 
    <div>
    <NewExpense onSubmit={handleFormSubmit}/>
    <Expense expenses={myExpenses}/>
    </div>  
  );
}

export default App;
