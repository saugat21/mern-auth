import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <Link to={"/"} className="m-0 text-light text-decoration-none">
                <h1>Mern Auth</h1>
              </Link>
            </div>

            <div className="text-end ">
              <Link
                to={"/login"}
                type="button"
                className="btn btn-outline-light me-3"
              >
                Login
              </Link>
              <Link to={"/register"} type="button" className="btn btn-warning">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
