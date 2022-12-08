
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';



function App() {
  return (
    <div className='body'>
      <Navbar></Navbar>
      <div className='col d-flex'>
        <div className='container'>
          <AboutMe></AboutMe>
        </div>
      </div>

    </div>
  );
}
export default App;
