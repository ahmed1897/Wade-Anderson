import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Body from "./Components/Body";
import Body2 from "./Components/Body2";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Body2" element={<Body2 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
