import './App.css';
import Header from './componants/Header';
import Navigation from './componants/Navigation';
import Homepage from './componants/Homepage';
import ProjectPage from './componants/ProjectPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Homepage/>
      <ProjectPage/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
    </div>
  );
}

export default App;
