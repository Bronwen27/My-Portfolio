import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import Navigation from './componants/Navigation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
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
