import React from "react";
import { logoutUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg  rounded">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzeddyYvoefdkF_1Lnmyqyykzfp0jJVQ56Q&usqp=CAU"
            alt="icon"
            style={{ width: "20%", height: "10%", marginLeft: "5%" }}
          />
          <a
            className="navbar-brand"
            style={{
              fontFamily: "Skranji",
              fontSize: "1.5rem",
            }}
            href="/"
          >
            E8 Pizza
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "grey" }}
        >
          <span className="navbar-toggler-icon">Me</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginRight: "5%" }}>
            {currentUser ? (
              <div className="dropdown mt-2">
                <a
                  style={{ color: "black" }}
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
