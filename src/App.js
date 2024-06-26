import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainContent from './MainContent';
import Home from './Home';
import AboutSupplier from './AboutSupplier';

  
function App() {
  return (
    <BrowserRouter basename='webearl-website'>
      
       
        <Routes>
        {/* <Header /> */}
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutSupplier />} />
          {/* <Footerr />  */}
        </Routes>
        
     
    </BrowserRouter>
  );
}

export default App;
