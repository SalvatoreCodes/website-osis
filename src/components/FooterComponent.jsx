import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer>
      <div className="socials">
        <h1>Follow us on our socials</h1>
        <hr />
        <div className="social-images">
          <a
            href="https://www.facebook.com/OSIS5pecialGener4tion/"
            target={"_blank"}
          >
            <img src="https://img.icons8.com/color/48/000000/facebook.png" />
          </a>
          <a
            href="https://www.instagram.com/osis_cvhs2/?hl=en"
            target={"_blank"}
          >
            <img src="https://img.icons8.com/fluency/48/null/instagram-new.png" />
          </a>
        </div>
      </div>
      <div className="navigations">
        <h1>Navigations</h1>
        <hr />
        <ul>
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
      </div>
      <div className="about">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.2959494202826!2d124.83772645454982!3d1.3350917478953186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f84957ec5fe9d3d!2sChristian%20Vocational%20School%202%20-%20Tomohon!5e0!3m2!1sen!2sid!4v1675226506689!5m2!1sen!2sid"
          style={{ border: "0" }}
          className="map-content"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p>
        Copyright @2023 All rights reserved | This website was made by Putra
        Goni (PPLG)
      </p>
    </footer>
  );
}

export default FooterComponent;
