import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="dusk"/>
        
      </main>
      <footer className="App-footer">
        Coded by <a href="https://github.com/17thaugust/dictionary-project" terget="_blank" rel="noreferrer">Karolina</a>
      </footer>
    </div>
  </div>
  );
}
