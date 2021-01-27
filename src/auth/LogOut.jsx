import React from "react";

const LogOut = ({ handleLogOut }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Wellcome</h2>
        <button onClick={handleLogOut}>Logout</button>
      </nav>
    </section>
  );
};

export default LogOut;
