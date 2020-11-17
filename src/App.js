import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Top100 from './components/top100'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          War Selection Meta
        </p>
        <Top100 />
     
      </header>
    </div>
  );
}

export default App;
