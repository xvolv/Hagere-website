import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from "./Components/TopBar.jsx"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopBar />} />

      </Routes>
    </Router>



  );
}

export default App;
