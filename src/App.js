
import './App.css';

import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.26,
      date: new Date(2023, 5, 12)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2023, 3, 7)
    }, {
      id: 'e3',
      title: 'New Desk',
      amount: 450,
      date: new Date(2023, 1, 7)
    },
    {
      id: 'e4',
      title: 'New Chair',
      amount: 200,
      date: new Date(2023, 12, 12)
    },

  ]
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Expenses items= {expenses}></Expenses>
      
    </div>
  );
}

export default App;
