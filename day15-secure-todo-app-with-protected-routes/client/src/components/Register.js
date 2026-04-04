import { useState } from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name:"", email: "", password: "" });

  const navigate = useNavigate();

  const submit = async () => {
    await axios.post("/users/register", form);
    navigate("/login");
  };
  return (
    <div className="register-container">
      {" "}
      <div className="register-form">
        <h2 className="register-title">Register</h2>
        <input
        text="name"
          placeholder="Name"
          className="register-input"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Email"
          className="register-input"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />{" "}
        <input
          placeholder="Password"
          type="password"
          className="register-input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />{" "}
        <button onClick={submit}>Register</button>{" "}
        <p>
          {" "}
          Already have account? <Link to="/login">Login</Link>{" "}
        </p>{" "}
      </div>
    </div>
  );
}
