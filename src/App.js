
import Expenses from "./components/Expenses"

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
    <div>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
