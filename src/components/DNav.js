import React from "react";
import { NavLink } from "react-router-dom";

function DNav() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "800" : "600",

      borderBottom: isActive ? "4px solid #6C7A9C" : "none",
      textDecoration: "none",
      borderWidth: "50%",
    };
  };
  return (
    <section className="dnav-style">
      <NavLink style={navLinkStyles} to="/product/desc">
        <div>Description</div>
      </NavLink>
      <NavLink style={navLinkStyles} to="/product/add-info">
        <div>Additional information</div>
      </NavLink>
      <NavLink style={navLinkStyles} to="/product/reviews">
        <div>Reviews</div>
      </NavLink>
    </section>
  );
}

export default DNav;
