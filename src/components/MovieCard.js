// import React from "react";
// import { Link } from "react-router-dom";
// //import DataContext from "../context/data";
// export default function MovieCard(props) {
//     console.log(props)
//   return (
//     <div className="card h-100">
//       <img src={props.data.image} className="card-img-top" alt={props.data.title}/>
//       <div className="card-body">
//         <h5 className="card-title">{props.data.title}</h5>
//         <p className="card-text">{props.data.price}</p>
//         <Link to={`/movie-details/${props.data.id}`} className="btn btn-primary">
//           Go to details
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props ) {
  console.log(props)
  const movie= props.data;
  return (
    <div className="card movie-item h-100  bg-dark">
      <img src={"https://image.tmdb.org/t/p/w500/"+ (movie.poster_path || movie.backdrop_path)} className="" alt={movie.title}/>
      <div className="card-body">
        <h5 className="card-title text-center text-light">{movie.title}</h5>
        <div className="col-lg-12">
          
        <Link to={`/movie-details/${movie.id}`} className="btn btn-primary  col-10 offset-1">
          Go to details
        </Link>
        </div>
      </div>
    </div>
  );
}
