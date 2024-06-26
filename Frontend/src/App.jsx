import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Sell from "./Pages/Sell";
import Denied from "./Pages/Denied";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const App = () => 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/denied" element={<Denied />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
