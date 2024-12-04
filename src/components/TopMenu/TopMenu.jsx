import React from "react";
import "./TopMenu.scss";
import BagIcon from "../../icons/BagIcon/BagIcon";
import HomeIcon from "../../icons/HomeIcon/HomeIcon";

const TopMenu = () => {
  return (
    <div className='top-menu'>
      <HomeIcon />
      <BagIcon />
    </div>
  );
};
export default TopMenu;
