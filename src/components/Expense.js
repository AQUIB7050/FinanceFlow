import "./Expense.css";
import Card from "./Card";
import ExpenseItem from './ExpenseItem';

function Expense(){
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

      return (<Card className="expense">
          <ExpenseItem expense={expenses[0]}/>
          <ExpenseItem expense={expenses[1]}/>
          <ExpenseItem expense={expenses[2]}/>
      </Card>);
}

export default Expense;