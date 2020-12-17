import React from "react";

/**
 * Props = { name : String ,  navLinks : arrayOf Objects }
 */

const NavBar = (props) => {
  return (
    <header>
      <h1 class="rotate">{props.name} </h1>
      <ul class="navmenu">
        {props.navLinks.map((el, i) => {
          return (
            <li key={i}>
              <a href={el.href}> {el.link} </a>{" "}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default NavBar;
