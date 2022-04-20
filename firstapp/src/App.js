import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, Please Visit my All Profiles
        </p>
        <a
          className="App-link"
          href="https://github.com/MrAmanKapoor"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Profile
        </a>
        <a
          className="App-link"
          href="https://github.com/MrAmanKapoor"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Twitter Profile
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/amankapoorji"
          target="_blank"
          rel="noopener noreferrer"
        >
         My Linkedin Profile
        </a>
      </header>
    </div>
  );
}

export default App;
