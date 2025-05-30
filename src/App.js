import React from 'react';
import './style.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <Header />
      {/* this outlet filled with whatever component we have in chirdern with routes */}
      <Outlet/>
     
    </div>
  );
}