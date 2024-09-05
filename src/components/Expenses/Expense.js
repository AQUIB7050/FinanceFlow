import {useState} from 'react';
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expense = (props) => {

    const [selectedYear, setYear] = useState('2021');


    const changeYearHandler = (yearVal) => {
        setYear(yearVal);
    }

    const filteredExpenses = (props.expenses.filter((exp) => {return exp.date.getFullYear().toString() === selectedYear}));


      return (<Card className="expense">
        <ExpenseFilter selectedYear={selectedYear} onChangeYear={changeYearHandler}/>
        <ExpenseList filteredExpense={filteredExpenses}/>
      </Card>);
}


export default Expense;