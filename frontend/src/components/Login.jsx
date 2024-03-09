import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/usersApiSlice";
import { setCredentials } from "../store/authSlice";
import { set } from "mongoose";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //aaba mutation bata login nikalne.... isLoading ra error already buildin hunxa.
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
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
          <button type="submit" className="btn btn-primary w-100 py-2">
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
