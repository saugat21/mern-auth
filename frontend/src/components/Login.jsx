import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <>
      <div className="container mt-5">
        <form
          onSubmit={submitHandler}
          className="w-50 max-w-sm mx-auto p-4 bg-light border rounded shadow"
        >
          <h1 className="h3 mb-3 fw-bold text-center">Please sign in</h1>

          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-2 text-center">
            New user?
            <Link to={"/register"} className="text-primary">
              please register first
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
