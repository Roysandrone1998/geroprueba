import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Street from './components/Street';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Works />} /> {/* Ruta de inicio */}
            <Route path="/works" element={<Works />} />
            <Route path="/street" element={<Street />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;