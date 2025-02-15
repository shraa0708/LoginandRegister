import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
            });

            setMessage(res.data.message); // Show success message
        } catch (error) {
            setMessage(error.response.data.message || "Something went wrong");
        }
    };

    return (
        <div style={{ textAlign: "center", maxWidth: "300px", margin: "auto" }}>
            <h2>Register</h2>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
