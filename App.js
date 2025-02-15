import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <Router>
            <div>
                <h1 style={{ textAlign: "center" }}>User Authentication</h1>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<h2 style={{ textAlign: "center" }}>Welcome! Please Login or Register.</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

