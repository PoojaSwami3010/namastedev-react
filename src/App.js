import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './style.css';

// Cunking
// Code splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading
//dynamic inport



export default function App() {
  return (
    <div className="app">
      <Header />
      {/* this outlet filled with whatever component we have in chirdern with routes */}
      <Outlet/>
     
    </div>
  );
}