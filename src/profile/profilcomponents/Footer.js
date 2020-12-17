import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Copyritghts &copy; {props.copyrights.name} {props.copyrights.year}
      </p>
    </footer>
  );
};

export default Footer;
