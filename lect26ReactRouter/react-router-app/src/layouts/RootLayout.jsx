import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigation } from "react-router-dom";

function RootLayout() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigation = useNavigation();
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(obj) => {
                return obj.isActive ? "newActiveClass" : null;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={(obj) => {
                return obj.isActive ? "newActiveClass" : null;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={(obj) => {
                return obj.isActive ? "newActiveClass" : null;
              }}
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="posts"
              className={(obj) => {
                return obj.isActive ? "newActiveClass" : null;
              }}
            >
              posts
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="Log"
                className={(obj) => {
                  return obj.isActive ? "newActiveClass" : null;
                }}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log Out
          </button>
        )}
      </nav>
      <main>
        {navigation.state === "loading" ? <h1>Loading...</h1> : <Outlet />}
      </main>
    </div>
  );
}

export default RootLayout;
