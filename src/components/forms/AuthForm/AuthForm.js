import React, { useState } from "react";
import './AuthForm.styles.css'
import { useNavigate } from "react-router-dom";
import app from "../../../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthForm = ({ buttonName }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState({}); // State to hold validation errors
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {};

        // Basic form validation
        if (!email.trim()) {
            errors.email = "Email is required";
        }

        if (!password.trim()) {
            errors.password = "Password is required";
        }

        if (buttonName === "Sign Up" && !username.trim()) {
            errors.username = "Username is required";
        } else if (buttonName === "Sign Up" && username.trim().length < 8) {
            errors.username = "Username must be at least 8 characters long";
        }

        // Email validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (email.trim() && !emailRegex.test(email)) {
            errors.email = "Invalid email format";
        }

        // Password validation
        if (password.trim() && password.trim().length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        setError(errors);

        if (Object.keys(errors).length === 0) {
            const auth = getAuth(app);
            
            try {
                if (buttonName === "Sign Up") {
                    await createUserWithEmailAndPassword(auth, email, password);
                    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
                    userCredentials.user.displayName = username;
                    navigate('/');
                } else {
                    // Sign in the user
                    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
                    navigate('/');
                }
            } catch (err) {
                // Handle authentication errors
                if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
                    setError({ authError: "Email or password is incorrect" });
                } else {
                    console.error(err);
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error.authError && <div className="error-message">{error.authError}</div>}
            {buttonName === "Sign Up" && (
                <div className="form-group">
                    <label>UserName</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    {error.username && <div className="error-message">{error.username}</div>}
                </div>
            )}
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {error.email && <div className="error-message">{error.email}</div>}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-input"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {error.password && <div className="error-message">{error.password}</div>}
            </div>
            <div className="form-group">
                <input type="submit" className="button-primary" value={buttonName} />
            </div>
        </form>
    );
};

export default AuthForm;
