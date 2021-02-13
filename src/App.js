// import logo from './logo.svg';
// import './App.css';
// import Counter from './components/Counter';
// import Form from './components/Form';
// import FormPeople from './components/FormPeople';
// import PhotoSearch from './components/PhotoSearch';
import HookCounter from "./components/HookCounter";

function App() {
  const cls="bg-gray-100"
  return (
    <div className={cls}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter/> */}
        {/* <Form /> */}
        {/* <FormPeople /> */}
      {/* </header> */}
      {/* <PhotoSearch/> */}
      <HookCounter/>
    </div>
  );
}

export default App;
