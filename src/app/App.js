import React from 'react';
import './App.css';
import Header from '../components/AppHeader/Header';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/AppFooter/Footer';
import SideBar from '../components/SideBar/SideBar';
import PageBody from '../components/PageBody/PageBody';

function App() {
  return (
    <Router>
      <Header />
      <div className='SideBarAndPageBody'>
        <SideBar />
        <PageBody />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
