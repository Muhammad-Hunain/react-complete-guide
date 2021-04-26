import ExpenseItem from "./Expenseitem"
import "./Expenses.css"
function Expenses(props) {

    return (
        <div className="expenses">
            <h2> Lets Get Started</h2>
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} />
        </div>
    );
}
export default Expenses;