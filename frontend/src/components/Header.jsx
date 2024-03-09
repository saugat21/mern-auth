import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../store/usersApiSlice";
import { logout } from "../store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              {userInfo ? (
                <>
                  <div class="dropdown">
                    <button class="dropbtn">{userInfo.name}</button>
                    <div class="dropdown-content">
                      <Link to={"/profile"}>Profile</Link>
                      <Link onClick={logoutHandler}>Logout</Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    type="button"
                    className="btn btn-outline-light me-3"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    type="button"
                    className="btn btn-warning"
                  >
                    Sign-up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
