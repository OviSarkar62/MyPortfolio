import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./stylesheets/courosel.css";
import "./stylesheets/header-footer.css";
import "./stylesheets/home.css";
import "./stylesheets/projects-courses.css";
// ..
AOS.init({
  duration: 500,
});
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
