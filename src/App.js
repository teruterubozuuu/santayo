import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/pages/Home";
import Carinderias from "../src/pages/Carinderias";
import CardDetails from "../src/components/CardDetails";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Review from "../src/components/Review";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carinderias" element={<Carinderias />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
        <Route path="/review" element={<Review/>}/>
      </Routes>
    </Router>
  );
}

export default App;
