import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Log from './Log';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Log" element={<Log/>} />
      </Routes>
    </Router>
  );
}

export default App;
