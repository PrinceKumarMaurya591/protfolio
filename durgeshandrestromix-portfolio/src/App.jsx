// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Menu from "./components/Menu";
// import Footer from "./components/Footer";
// import Dishes from "./components/Dishes";
// import Reviews from "./components/Review";
// import Review from "./components/Review";
// import Contact from "./components/Contact";

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <main>
//         <div id="home">
//           <Home />
//         </div>

//         <div id="dishes">
//           <Dishes />
//         </div>

//         <div id="about">
//           <About />
//         </div>

//         <div id="menu">
//           <Menu />
//         </div>

//         <div id="review">
//           <Review />
//         </div>
//       </main>

//       <div id="contact">
//           <Contact />
//         </div>

//       <Footer />
//     </div>
//   );
// };

// export default App;













import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Dishes from './components/Dishes';
import Reviews from './components/Review';
import Review from './components/Review';
import Contact from './components/Contact';
 import Login from './components/Login'; 
import Health from './components/Health';



// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/health" element={<Health />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




const App = () => {
  return (
    <div>
      <Router>
      <Navbar />


      <main>
        

<Routes>
<Route path="/login" element={<Login />} />
<Route path="/health" component={Health} />
</Routes>



        <div id="home">
          <Home />
        </div>


        <div id="about">
          <About />
        </div>


        <div id="dishes">
          <Dishes />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

      <div id="contact">
          <Contact />
        </div>

      <Footer />
      </Router>
    </div>
  );
};

export default App;