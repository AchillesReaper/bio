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
      <Router basename='/bio'>
        <Navbar/>
        <Routes path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="academic" element={<Academic/>} />
          <Route path="industrial" element={<Industrial/>} />
          <Route path="projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
