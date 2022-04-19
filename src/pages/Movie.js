import React from "react";
import  { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axiosInstance from "../network/axios";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      //   .post(
      //     "https://fakestoreapi.com/products",
      //     {
      //       id: 1,
      //       name: "dina",
      //     },
      //     {
      //       params: {
      //         id: 2,
      //       },
      //       headers: {},
      //     }
      //   )
      .get("/Movies")
      .then((res) => setMovies(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Movies List</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return (
            <div className="col mb-4" key={movie.id}>
              <MovieCard data={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
