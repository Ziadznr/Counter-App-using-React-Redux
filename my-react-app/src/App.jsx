import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/todo">TodoPage</Link></li>
        </ul>
      </nav>

      <Routes>
        
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
