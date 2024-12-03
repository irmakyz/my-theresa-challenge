import React from "react";
import "./Header.scss";
const Header = ({ content }) => {
  return (
    <div className="header">
      <span className="header__content">{content}</span>
    </div>
  );
};
export default Header;
