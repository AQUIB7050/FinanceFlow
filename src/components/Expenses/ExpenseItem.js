import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from'./ExpenseDate';
import Card from "../UI/Card";


const ExpenseItem = (props) => {

    const [newTitle, setTitle] = useState(props.expense.title);

    const clickHandler = () =>{
        setTitle("New Value");
    }
    
    return (<Card className="expense-item">
        <div>
            <ExpenseDate date={props.expense.date}/>
        </div>
        <div className="expense-item__description">
            <h2>{newTitle}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>

    </Card>);
}

export default ExpenseItem;