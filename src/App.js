import { Routes, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Photo from "./pages/Photo";
import Papers from "./pages/Papers";
import Contact from "./pages/Contact";
import Professor from "./pages/Professor";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
