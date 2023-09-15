import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Academic from './components/Academic';
import Industrial from './components/Industrial';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/academic" exact element={<Academic/>} />
          <Route path="/industrial" exact element={<Industrial/>} />
          <Route path="/projects" exact element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
