
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  return (
    <div className='body'>
      <Navbar></Navbar>
      <div className='col d-flex'>
        <div className='container'>
          <AboutMe></AboutMe>
          <Projects></Projects>
        </div>
      </div>

    </div>
  );
}
export default App;
