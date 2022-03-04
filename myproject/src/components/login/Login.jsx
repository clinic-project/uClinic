import React from "react";

export default function Login() {
  const handleChange = () => {};
  return (
    <div class="container">
      <div class="row">
        <span>Login</span>
        <div class="col-12">
          <div class="form">
            <label for="username" class="fa fa-envelope">
              User Name
            </label>
            <br />
            <input type="username" placeholder="Username Address" />
          </div>
          <div class="form">
            <label for="password" class="fa fa-lock">
              Password
            </label>
            <br />
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
    </div>
  );
}
