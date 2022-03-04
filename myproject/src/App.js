import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/register/Register";
import Rendezvous from "./components/rendez-vous/RendezVous";
import Specialités from "./components/specialités/Specialités";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/register" element={<Register />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/rendezvous" element={<Rendezvous />}></Route>

        <Route path="/specialités" element={<Specialités />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
