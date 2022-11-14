
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
        <a className="Resume-Link"
            href="https://docs.google.com/document/d/1gOQxj1Ook9QBmz1vjTjJW-tSYr34PhcR/edit?usp=share_link&ouid=107943270788566552480&rtpof=true&sd=true"
            target="_blank"
            rel='noopener noreferrer'
        >
            My Resume
        </a>

      </header>
    </div>
    </div>
  );
}

export default App;
