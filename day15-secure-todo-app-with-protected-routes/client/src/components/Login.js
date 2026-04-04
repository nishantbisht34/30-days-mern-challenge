import { useState, useContext } from "react";
import axios from "../axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../App.css"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async () => {
    const res = await axios.post("/users/login", form);
    login(res.data);
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-form">
      {" "}
      <h2 className="login-title">Login</h2>{" "}
      <input
        placeholder="Email"
        className="login-input"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />{" "}
      <input
        placeholder="Password"
        type="password"
        className="login-input"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />{" "}
      <button className="login-button" onClick={submit}>Login</button>{" "}
      <p>
        {" "}
        No account? <Link to="/register">Register</Link>{" "}
      </p>{" "}
      </div>
    </div>
  );
}
