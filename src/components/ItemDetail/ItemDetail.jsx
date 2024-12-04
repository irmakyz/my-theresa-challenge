import React from "react";
import "./ItemDetail.scss";

const ItemDetail = ({ imgUrl, imgAlt, description, onClick, buttonStyle }) => {
  return (
    <div className='item-detail'>
      <img className='item-detail__image' src={imgUrl} alt={imgAlt} />
      <div className='item-detail__description-container'>
        <p>{description}</p>
        <button style={buttonStyle} onClick={onClick} className='item-detail__button'>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
export default ItemDetail;
