import './App.css';
import Header from './componants/Header';
import Navigation from './componants/Navigation';
import Homepage from './componants/Homepage';
import Projects from './componants/Projects';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Navigation/>
      <Homepage/>
      <Projects/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
    </div>
    </Router>
  );
}

export default App;
