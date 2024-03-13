import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import InvoiceList from './InvoiceList'; // added InvoiceList component

// added a layout component that wraps the InvoiceForm and InvoiceList components
const Layout = () => {
  return (
    <div>
      <h1>Invoices</h1>
      <Routes>
        <Route path="/new" element={<InvoiceForm />} />
        <Route path="/" element={<InvoiceList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
