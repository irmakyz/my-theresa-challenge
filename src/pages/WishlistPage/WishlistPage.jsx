import React from "react";
import Wishlist from "../../components/Wishlist/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlistSlice";
import TopMenu from "../../components/TopMenu/TopMenu";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <>
      <TopMenu />
      <Wishlist onRemove={(id) => handleRemove(id)} list={wishlist} />
    </>
  );
};
export default WishlistPage;
