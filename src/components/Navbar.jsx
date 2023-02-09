import React from "react";

import LogoSmk from "../assets/logo smk.png";
import LogoOsis from "../assets/logo osis.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img src={LogoOsis} alt="logo smk" />
      <ul className="navigations">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
      </ul>
      <img src={LogoSmk} alt="logo smk" />
    </div>
  );
}

export default Navbar;
