import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PageLayout from './components/PageLayout';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import Community from './pages/CommunityPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrollNav, setScrollNav] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);

  // const changeNav = () => {
  //   if (window.scrollY <= 50) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };
  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout toggle={toggle} />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/community" element={<Community />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Sidebar toggle={toggle} isOpen={isOpen} />
    </div>
  );
}

export default App;
