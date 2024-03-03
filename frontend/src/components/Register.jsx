import React from "react";

function Register() {
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
            />
            <label for="floatingtext">Enter your Name</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
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
            />
            <label htmlFor="floatingPassword">Password</label>
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
