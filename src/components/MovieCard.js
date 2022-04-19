import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
    console.log(props)
  return (
    <div className="card h-100">
      <img src={props.data.image} className="card-img-top" alt={props.data.title}/>
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">{props.data.price}</p>
        <Link to={`/movie-details/${props.data.id}`} className="btn btn-primary">
          Go to details
        </Link>
      </div>
    </div>
  );
}
