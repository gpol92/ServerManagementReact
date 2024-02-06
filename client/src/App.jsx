import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Config from './components/Config';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home></Home>} />
        <Route path="/Config" element={<Config></Config>} />
      </Routes>
    </Router>
  );
};

export default App;

