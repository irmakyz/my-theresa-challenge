import React from "react";
import Header from "../Header/Header";
import "./Wishlist.scss";
const Wishlist = ({ onRemove, list }) => {
  return (
    <div className='wishlist'>
      <Header content='My Wishlist' />
      {list.length ? (
        <ul className='wishlist__container'>
          {list.map((item, index) => (
            <li key={item.id + index} className='wishlist__title-and-button'>
              {item.title}
              <button
                className='wishlist__wishlist-button'
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className>
          Currently, there is not item here. Add to your wishlist to see items!
        </p>
      )}
    </div>
  );
};

export default Wishlist;
