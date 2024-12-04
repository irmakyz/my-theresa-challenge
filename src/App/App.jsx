import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import DetailedItemPage from "../pages/DetailedItemPage/DetailedItemPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/details/:id' element={<DetailedItemPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
