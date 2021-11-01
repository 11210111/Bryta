import "../css/Movie.css";
export default function Movie({ movie }) {
  return (
    <div id="movie-container">
      <img
        src={movie && movie?.movieImage}
        alt={movie && movie?.movieName}
        className="movie-image"
      />
      <div className="movie-name">{movie && movie?.movieName}</div>
    </div>
  );
}
