import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter/> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
