import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="header py-2">
        <Link
          to="/"
          className="header_logo"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" />
          <h4>Flexcode</h4>
        </Link>
        <nav>
          <ul className="nav_list">
            {navLinks.map((link) => (
              <li
                onClick={() => setActive(link.title)}
                key={link.id}
                className={`${active === link.title ? "clr-primary" : "clr-white"}`}>
                <a className="link" href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <img
              className="mobile-nav_icon"
              onClick={() => setToggle(!toggle)}
              src={toggle ? close : menu}
              alt="menu"
            />
            <ul className={`${!toggle ? "hidden" : "flex"} mobile-nav_list`}>
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  key={link.id}
                  className={`${active === link.title ? "clr-primary" : "clr-white"}`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
