import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import React, { useState } from "react";
import SignIn from "./pages/auth/Signin";
import SignUp from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/Forgotpassword";
import ResetPassword from "./pages/auth/Resetpassword";
import UpdateProfile from "./pages/auth/Updateprofile";
import Logout from "./pages/auth/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: "#bde3db" , height: "10vh"}}>
        <nav
          className="nav"
          style={{ backgroundColor: "#095847", padding: "10px" }}
        >
          <Link className="nav-link" to="/home" style={{ color: "white" }}>
            Home
          </Link>
          <Link
            className="nav-link"
            to="/bookDetails"
            style={{ color: "white" }}
          >
            Book Details
          </Link>

          {/* Dropdown for Main Sign Up */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
            >
            Sign Up
            </a>
            {isOpen && (
              <ul className="dropdown-menu show">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/signin"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/update-profile"
                    onClick={() => setIsOpen(false)}
                  >
                    Update Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/forgotpassword"
                    onClick={() => setIsOpen(false)}
                  >
                    Forgot Password
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/reset-password"
                    onClick={() => setIsOpen(false)}
                  >
                    Reset Password
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/logout"
                    onClick={() => setIsOpen(false)}
                  >
                    Logout
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/profiel"
                    onClick={() => setIsOpen(false)}
                  >
                    profile
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bookDetails" element={<BookDetails />} />

          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
