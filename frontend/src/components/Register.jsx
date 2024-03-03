import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className="container mt-5">
        <form className="w-50 max-w-sm mx-auto p-4 bg-light border rounded shadow">
          <h1 className="h3 mb-3 fw-bold text-center">Please sign up</h1>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="floatingtext"
              placeholder="saugat"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="floatingtext">Enter your Name</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
