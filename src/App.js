import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Carinderias from "./Carinderias";
import CardDetails from "./CardDetails";
import About from "./About";
import Contact from "./Contact";
import Review from "./Review";

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
