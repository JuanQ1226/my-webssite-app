
import './App.css';
let logo = require('./images/logo.png');

function App() {
  return (
    <div className='head'>
      <h1 className='Text'>Welcome to my Website!</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in Progress
        </p>
        <a
          className="Git-link"
          href="https://github.com/JuanQ1226"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>

      </header>
    </div>
    </div>
  );
}

export default App;
