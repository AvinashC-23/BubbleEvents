import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Photobooths from "./Pages/Photobooths"
import Pricing from './Pages/Pricing';
import Footer from "./Components/Footer"
function App() {
  return (
      <div>
        <Navbar/>
        <Home/>
        <Events/>
        <Photobooths/>
        <Pricing/>
        {/* <Footer/> */}
      </div>
      

  );
}

export default App;