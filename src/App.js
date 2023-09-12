import "./App.css";
import "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2023, 11, 2),
      title: "laptop",
      price: 300,
    },
    {
      id: "e2",
      date: new Date(2023, 11, 2),
      title: "hotpot",
      price: 300,
    },
    {
      id: "e3",
      date: new Date(2023, 11, 2),
      title: "Monitor",
      price: 100,
    },
  ];

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
