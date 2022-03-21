import { useState } from "react";
import axios from "axios";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/register", {
        username,
        password
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div class="container">
      <div class="row">
        <span>Register</span>

        <form className="registerForm" onSubmit={handleSubmit}>
          <div class="form">
            <label for="username" class="fa fa-envelope">
              User Name
            </label>
            <br />
            <input
              type="username"
              placeholder="Username Address"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form">
            <label
              for="password"
              class="fa fa-lock"
              onChange={(e) => setPassword(e.target.value)}
            >
              Password
            </label>
            <br />
            <input type="password" placeholder="Password" />
          </div>
        </form>
      </div>
    </div>
  );
}
