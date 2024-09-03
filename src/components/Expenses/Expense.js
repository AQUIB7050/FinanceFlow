import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {


      return (<Card className="expense">
          <ExpenseItem expense={props.expenses[0]}/>
          <ExpenseItem expense={props.expenses[1]}/>
          <ExpenseItem expense={props.expenses[2]}/>
      </Card>);
}

export default Expense;