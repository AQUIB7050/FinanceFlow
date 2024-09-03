import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle]= useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');

    const changeHandler = (initializer, value) => {
        if(initializer === 'title'){
            setEnteredTitle(value);
        } else if(initializer === 'amount'){
            setEnteredAmount(value);
        } else{
            setEnteredDate(value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onFormSubmit(expense);

    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={(event) => {
                        changeHandler('title', event.target.value);
                    }}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='.01' step='.01' value={enteredAmount} onChange={(event) => {
                        changeHandler('amount', event.target.value);
                    }}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2022-01-02' max='2024-12-31' value={enteredDate} onChange={(event) =>{
                        changeHandler('date', event.target.value);
                    }}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
