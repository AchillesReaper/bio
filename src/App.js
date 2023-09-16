import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Academic from './components/Academic';
import Industrial from './components/Industrial';
import Projects from './components/Projects';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/bio" element={<Home/>} />
          <Route path="/bio/academic" element={<Academic/>} />
          <Route path="/bio/industrial" element={<Industrial/>} />
          <Route path="/bio/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
