import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../mock/index";

const Menu = ({ darkMode, switchMode }) => {
  const [on, setOn] = useState(false);
  const [menu, setMenu] = useState([]);
  console.log(darkMode);
  useEffect(() => {
    setMenu(
      menuItems.map((menuItem, index) => (
        <li key={index}>
          <NavLink to={menuItem.route} onClick={() => setOn(!on)}>
            <p className="mobile-menu">{menuItem.name}</p>
          </NavLink>
        </li>
      ))
    );
  }, [on]);

  return (
    <div className="foreground">
      <div className="menu">
        <div className="logo-container">
          <img src="/img/logo-dark.png" alt="" />
        </div>
        <ul className="nav-link">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <NavLink to={menuItem.route}>{menuItem.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="dark-mode">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label
            htmlFor="checkbox"
            className="label"
            onClick={() => switchMode && switchMode(!darkMode)}
          >
            <span>🌜</span>
            <span id="sun">🌞</span>
            <div className={"ball-" + darkMode}></div>
          </label>
        </div>
        <i class="fa fa-bars" onClick={() => setOn(!on)} />

        {on ? (
          <div className="sidenav open">{menu}</div>
        ) : (
          <div className="sidenav"></div>
        )}
      </div>
    </div>
  );
};

export default Menu;
