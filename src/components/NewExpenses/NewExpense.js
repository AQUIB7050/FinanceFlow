import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const handleSubmission = (expense) =>{
        const expenses = {
            ...expense,
            id:Math.random()
        }

        props.onSubmit(expenses);
    }
   return (
   <div className='new-expense'>
        <ExpenseForm onFormSubmit={handleSubmission}/>
    </div>
    );
}

export default NewExpense;