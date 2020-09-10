import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <article className="br3 mb4 ba b--black-10 shadow-5">
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 link dim white underline pa3 pointer"
          >
            Sign Out
          </p>
        </nav>
      </article>
    );
  } else {
    return (
      <article className="br3 mb4 ba b--black-10 shadow-5">
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </article>
    );
  }
};

export default Navigation;
