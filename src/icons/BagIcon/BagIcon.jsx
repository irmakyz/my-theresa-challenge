import React from "react";
import "./BagIcon.scss";
import { Link } from "react-router-dom";

const BagIcon = () => {

  return (
    <div className='bag-icon-container'>
      <Link to='/wishlist'>
        <i className='fas fa-shopping-bag bag-icon'></i>
      </Link>
    </div>
  );
};

export default BagIcon;
