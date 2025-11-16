import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import "../css/MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movie details...");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div className="movie-details-container"><p>Loading...</p></div>;
  }

  if (error) {
    return (
      <div className="movie-details-container">
        <p className="error">{error}</p>
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    );
  }

  if (!movie) {
    return <div className="movie-details-container"><p>Movie not found</p></div>;
  }

  return (
    <div className="movie-details-container">
      <Link to="/" className="back-btn">
        Back
      </Link>
      
      <div className="movie-details">
        <div className="movie-poster-section">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster-large"
          />
        </div>

        <div className="movie-info-section">
          <h1>{movie.title}</h1>
          
          <div className="movie-meta">
            <span className="rating">★ {movie.vote_average?.toFixed(1)}/10</span>
            <span className="release-date">
              {movie.release_date
                ? movie.release_date
                : "N/A"}
            </span>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-badge">
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <div className="movie-stats">
            <div className="stat">
              <span className="label">Runtime:</span>
              <span className="value">
                {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
              </span>
            </div>
            <div className="stat">
              <span className="label">Budget:</span>
              <span className="value">
                {movie.budget
                  ? `$${(movie.budget / 1000000).toFixed(1)}M`
                  : "N/A"}
              </span>
            </div>
            <div className="stat">
              <span className="label">Revenue:</span>
              <span className="value">
                {movie.revenue
                  ? `$${(movie.revenue / 1000000).toFixed(1)}M`
                  : "N/A"}
              </span>
            </div>
          </div>

          <div className="movie-overview">
            <h2>Overview</h2>
            <p>{movie.overview || "No description available"}</p>
          </div>

          {movie.homepage && (
            <div className="movie-link">
              <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                Visit Official Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
