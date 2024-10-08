import './ExpenseItem.css';
import ExpenseDate from'./ExpenseDate';
import Card from "../UI/Card";


const ExpenseItem = (props) => {

    
    return (
    <li>
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.expense.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>

        </Card>
    </li>);
}

export default ExpenseItem;