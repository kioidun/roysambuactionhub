import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescroll from "./components/homescroll/Homescroll";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Manifesto from "./components/manifesto/Manifesto";
import Pillars from "./components/pillars/Pillars";
import Getinvolved from "./components/getinvolved/Getinvolved";
import Archive from "./components/archive/Archive";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Navbar/>
    <Routes>
      <Route path="/" element={<Homescroll />} />
      <Route path="/manifesto" element={<Manifesto />} />
      <Route path="/pillars" element={<Pillars />} />
      <Route path="/getinvolved" element={<Getinvolved />} />
      <Route path="/archive" element={<Archive />}/>
    </Routes>
    <Footer/>
   </BrowserRouter>

  );
}

export default App;
