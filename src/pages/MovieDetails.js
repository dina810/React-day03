import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../network/axios";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});

  const params = useParams();
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>MovieDetails</div>

      <h2>{setMovie.title}</h2>
      <p>{setMovie.description}</p>
      <small>Price : {setMovie.price}</small>
    </>
  );
}
