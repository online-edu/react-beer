import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="cg-footer">
    <div className="container">
      <p className="mb-0 h6">
        © {new Date().getFullYear()} Creative Group. All right reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
