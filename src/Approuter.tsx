import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/homepage";
import About from "./pages/About/about";
import Services from "./pages/Services/services";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
