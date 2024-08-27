import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <div className="flex justify-center space-x-4 p-4">
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
