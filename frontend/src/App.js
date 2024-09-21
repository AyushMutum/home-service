import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookNow from './pages/BookNow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
    </Router>
  );
}

export default App;
