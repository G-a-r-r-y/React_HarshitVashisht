import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Log() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();

  const previousPath = searchParams.get("redirectedTo") || "/";
  console.log(previousPath);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true });
    }
  }, [isLoggedIn]);
  function login() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <h1>LogIn</h1>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Log;
