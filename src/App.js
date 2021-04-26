

import ExpenseItem from "./components/Expenseitem";
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 94.12,
      date: new Date(2021, 28, 2)
    },
    {
      id: 'e2',
      title: 'New tv',
      amount: 799.49,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e3',
      title: 'car insurance',
      amount: 294.64,
      date: new Date(2021, 3, 30)
    },
    {
      id: 'e4',
      title: 'New Desk(Wooden)',
      amount: 450,
      date: new Date(2021, 3, 27)
    },
  ]
  return (
    <div className="expenses">
      <h2> Lets Get Started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />

    </div>
  );
}

export default App;
