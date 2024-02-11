import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({path = "login"}) => {
  // create state, then show timer for 5 seconds and then we redirect
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  // to store the userlocation like where the user want to go after some works
  const location = useLocation();
  // inside useEffect, we call function at initial time. make sure to pass the dependencies [], count and navigate that will re-render using this
  useEffect(() => {
    // get the count and set the interval
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000); // take 1000ms means 1 s
    // if count becomes zero then navigate to login
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      {/*  paste the spinner copied from bootstrap and convert it to jsx */}
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center"> Redirecting to you in {count} seconds </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
