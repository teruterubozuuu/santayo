import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Carinderias from "./Carinderias";
import CardDetails from "./CardDetails";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carinderias" element={<Carinderias />} />
                <Route path="/card/:id" element={<CardDetails />} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </Router>
    );
}


export default App;
