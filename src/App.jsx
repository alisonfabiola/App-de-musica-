import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './styles/GlobalStyle';



function App() {
  return (
    <Router>
      <GlobalStyle /> {/* */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* */}
      </Routes>
    </Router>
  );
}

export default App;
