import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Cursos from './pages/Cursos';
import Recursos from './pages/Recursos';
import Empregos from './pages/Empregos';
import Noticias from './pages/Noticias';
import Contato from './pages/Contato';
import './App.css';
// Componentes da área administrativa
import AdminLayout from './pages/AdminLayout';
import RefugeeList from './pages/RefugeeList';
import RefugeeForm from './pages/RefugeeForm';
import Login from './pages/Login';

// Componente de rota protegida
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken') === 'authenticated';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/empregos" element={<Empregos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/admin" element={<AdminLayout />}/>
            <Route path="/admin" element={<RefugeeList />} />
            <Route path="/refugees" element={<RefugeeList />} />
            <Route path="/refugees/new" element={<RefugeeForm />} />
            <Route path="/refugees/edit/:id" element={<RefugeeForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;