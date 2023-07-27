import React from 'react';
import './App.css';
import Header from '../components/AppHeader/Header';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/AppFooter/Footer';
import SideBar from '../components/SideBar/SideBar';

function App() {
  return (
    <div>
      <Header />
      <div className='SideBarAndPageBody'>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
