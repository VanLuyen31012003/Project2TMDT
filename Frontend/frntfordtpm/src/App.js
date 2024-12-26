import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Routesql from './Routes/RouteQL';
import Navigation from './Component/Home/Navigation';
import Sidebar from './Component/Home/Sidebar';
import Footer from './Component/Home/Footer';

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        
        <div className="flex-1 flex flex-col">
          <Navigation />
          <div className="flex-1 p-4">
            <Routesql/>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
