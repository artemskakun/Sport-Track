import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import './App.css'; // Подключение стилей

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          {/* <Route path="/" element={<LoginForm />} /> */}
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* Дополнительные маршруты, если необходимо */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;