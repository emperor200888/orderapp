import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OrdersList from './pages/OrdersList';
import OrderForm from './pages/OrderForm';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Orders List</Link> | <Link to="/create">Create Order</Link>
      </nav>
      <Routes>
        <Route path="/" element={<OrdersList />} />
        <Route path="/create" element={<OrderForm />} />
        <Route path="/edit/:id" element={<OrderForm />} />
      </Routes>
    </div>
  );
};

export default App;
