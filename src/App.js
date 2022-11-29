// Referencing code from Module 20
// import logo from './logo.svg';
import './App.css';
// Import PortfolioContainer from the components folder
import PortfolioContainer from "./components/PortfolioContainer";

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another default HTML from it.
function App() {
  return (
    <div className="App">
        <PortfolioContainer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greeting/> */}
    </div>

  );
}

export default App;
