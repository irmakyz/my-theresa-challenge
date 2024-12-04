import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { categories } from "../../constants";
import categoryStyleConfig from "../../styles/CategoryConfig";
import Header from "../../components/Header/Header";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import TopMenu from "../../components/TopMenu/TopMenu";
import { addToWishlist } from "../../store/wishlistSlice";
import "./DetailedItemPage.scss";

const DetailedItemPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const category = state?.category || categories.popular;
  const [movie, setMovie] = useState(null);
  const categoryStyle = categoryStyleConfig[category];
  const dispatch = useDispatch();

  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGVkMWVhZGQ5ZTZlMDM0NWNjNzc4MjVmM2E2ZTliOSIsIm5iZiI6MTcwOTY2NDMxMy4wNDE5OTk4LCJzdWIiOiI2NWU3NjgzOWFkNTliNTAxNjJlODY1NGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NCJ1Ji8iP6OLiAX-aMLUnlM6GsgLWw50FSR46Tv3x_U"; // Replace with your TMDb API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);
console.log(movie)
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(movie));
  };
  return (
    <>
      <TopMenu />
      <div className='detailed-item-page' style={categoryStyle.fontStyles}>
        {movie ? (
          <>
            <Header content={movie.title} />
            <ItemDetail
              imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              imgAlt={movie.title}
              description={movie.overview}
              buttonStyle={categoryStyle.buttonStyle}
              onClick={handleAddToWishlist}
            />
            <p>Release Date: {movie.release_date}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default DetailedItemPage;
