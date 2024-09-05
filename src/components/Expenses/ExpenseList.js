import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) =>{
    

    if(props.filteredExpense.length === 0){
        return <div className='expense-list__fallback'><h1>No Expense Found.</h1></div>
    }

    return(
        <ul className='expenses-list'>
            {props.filteredExpense.map((exp) => (<ExpenseItem key={exp.id} expense={exp}/>))}
        </ul>
    );
}

export default ExpenseList;