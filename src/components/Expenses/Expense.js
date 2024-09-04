import {useState} from 'react';
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expense = (props) => {

    const [selectedYear, setYear] = useState('2021');


    const changeYearHandler = (yearVal) => {
        setYear(yearVal);
    }


      return (<Card className="expense">
        <ExpenseFilter selectedYear={selectedYear} onChangeYear={changeYearHandler}/>
          <ExpenseItem expense={props.expenses[0]}/>
          <ExpenseItem expense={props.expenses[1]}/>
          <ExpenseItem expense={props.expenses[2]}/>
      </Card>);
}


export default Expense;