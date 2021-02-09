import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import FormPeople from './components/FormPeople';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter/> */}
        {/* <Form /> */}
        <FormPeople />
      </header>
    </div>
  );
}

export default App;
