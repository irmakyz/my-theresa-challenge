import React from "react";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import "./CarouselContainer.scss";
const CarouselContainer = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [topRatedItems, setTopRatedItems] = useState([]);
  const [upcomingItems, setUpcomingItems] = useState([]);
  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGVkMWVhZGQ5ZTZlMDM0NWNjNzc4MjVmM2E2ZTliOSIsIm5iZiI6MTcwOTY2NDMxMy4wNDE5OTk4LCJzdWIiOiI2NWU3NjgzOWFkNTliNTAxNjJlODY1NGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NCJ1Ji8iP6OLiAX-aMLUnlM6GsgLWw50FSR46Tv3x_U"; // Replace with your TMDb API key

  const fetchMovies = async (endpoint, setState) => {
    const url = "https://api.themoviedb.org/3/movie/";
    try {
      const response = await axios.get(`${url}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
        params: {
          include_adult: false,
          language: "en-US",
          page: 1,
        },
      });

      const imageUrls = response.data.results
        .map(
          (movie) =>
            movie.backdrop_path &&
            `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
        )
        .filter(Boolean);

      setState(imageUrls);
    } catch (error) {
      console.error(`Failed to fetch ${endpoint} movies:`, error);
    }
  };

  useEffect(() => {
    fetchMovies("popular", setPopularItems);
    fetchMovies("top_rated", setTopRatedItems);
    fetchMovies("upcoming", setUpcomingItems);
  }, []);

  return (
    <div className="carousels-container">
      <div className="carousels-container__carousel-with-header">
        <Header content="Popular Movies" />
        <Carousel items={popularItems} />
      </div>
      <div className="carousels-container__carousel-with-header">
        <Header content="Top Rated Movies" />
        <Carousel items={topRatedItems} />
      </div>
      <div className="carousels-container__carousel-with-header">
        <Header content="Upcoming Movies" />
        <Carousel items={upcomingItems} />
      </div>
    </div>
  );
};
export default CarouselContainer;
