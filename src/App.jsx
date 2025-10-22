import "./App.css";
import { useEffect} from "react";
import { Route, Routes, useLocation} from "react-router";

import Header from "./shared/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
   const location = useLocation();
    useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "My Journal";
        break;
      case "/about":
        document.title = "About";
        break;
      default:
        document.title = "Not Found";
    }
  }, [location]);
  return (
    <div>
      <Header 
      title={
            location.pathname === "/"
              ? "Home"
              : location.pathname === "/about"
              ? "About"
              : "Not Found"
              }
      
      />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
