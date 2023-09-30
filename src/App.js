import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Photobooths from "./Pages/Photobooths"
// import Pricing from './Pages/Pricing';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Included from "./Pages/Included"
function App() {
  return (
    
      // <Router>
      //   <Navbar/>
      //   <Routes>
      //     <Route path="/" element={<Home/>}></Route>
      //     <Route path="/events" element={<Events/>}></Route>
      //     <Route path="/photobooths" element={<Photobooths/>}></Route>
      //     <Route path="/whyus" element={<Why/>}></Route>
      //     <Route path="/pricing" element={<Pricing/>}></Route>
      //   </Routes>
      // </Router>
      <div>
        <Navbar/>
        <Home/>
        <Events/>
        {/* <Why/> */}
        <Photobooths/>
      </div>
      

  );
}

export default App;
