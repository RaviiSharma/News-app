import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    localStorage.getItem("Ravi")
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false);
  }, []);

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Auth onLogin={handleLogin} />} />
          <Route path="/news" element={isAuthenticated && <News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
