
import './App.css';
import {TypeAnimation} from 'react-type-animation';
let logo = require('./images/logo.png');
let GitB = require('./images/GitButton.png');
let doc = require('./images/doc.png');


function App() {
  return (
    <div className='head'>
      <h1 className='Text'>J4x</h1>
    <div className="App">
      <header className="App-header">
      <button className='GitButton'>
      <img src={GitB} className='GButton' onClick={() => window.open("https://github.com/JuanQ1226")}/>
      </button>
      <button className='ResumeButton' onClick={() => window.open("https://docs.google.com/document/d/1gOQxj1Ook9QBmz1vjTjJW-tSYr34PhcR/edit?usp=share_link&ouid=107943270788566552480&rtpof=true&sd=true")}>
        <img className='docImg' src={doc}></img>
        <p>My Resume</p>
      </button>
        <TypeAnimation className='TAnim' sequence={['Hi!',1000,' My Name is Juan Quintana.', () => {console.log('Done Typing!')},5000]} wrapper='div' cursor={true} repeat={Infinity}/>
        <div className='paragraph-grid'>
        <div className='paragraph-block'>
        <h3 className='aboutMe'>About Me:</h3>
          <p className='pT'>   I was born in Ponce, Puerto Rico in the year 2003.
          I'm currently erolled on a Computer Science and Engeneering bachelor's degree
          at the University of Puerto Rico-Mayaguez, Where I'm developing my passion for
          Technology and Engeneering. I'm currently looking for opportunities to learn and gain experience
          in the Computer Science field. With this I can hopefully expand my knowledge in a faster rate.
          For example with this website I'm trying to learn Web development by doing it. I also have had other 
          productive experiences that I'll explain later.
          </p>
        </div>
        </div>
      </header>
    </div>
    </div>
  );
}
export default App;
