import React from "react";
import { Link } from "react-router-dom";
import './HomeIcon.scss';

const HomeIcon = () => {

  return (
    <div className='home-icon-container' >
      <Link to='/'>
        <i className='fas fa-home home-icon'></i>
      </Link>
    </div>
  );
};

export default HomeIcon;
