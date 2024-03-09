import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { useRegisteMutation } from "../store/usersApiSlice";
import { setCredentials } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisteMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error("Password Doesnot Match!");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form
          onSubmit={submitHandler}
          className="w-50 max-w-sm mx-auto p-4 bg-light border rounded shadow"
        >
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
            <label htmlFor="floatingtext">Enter your Name</label>
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
          {isLoading && <Loader />}
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
