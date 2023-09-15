import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import imdb from '../../../images/imdb.png';
import tomato from '../../../images/tomato.png';

export default function Movie() {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTopRatedMovies() {
            try {
                const apiKey = 'a52c0c31d17a115f2be15d08233a9193';
                const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                
                setMovieData(jsonData.results.slice(0, 10));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchTopRatedMovies();
    }, []);

    for (const key in movieData) {
        if (movieData.hasOwnProperty(key)) {
            console.log(key + ':', movieData[key]);
        }
    }

    const movieCards = movieData.map((movie) => (
        <div  key={movie.id} className="movie__card mb-4" data-testid="movie-card">
            <div className="movieposter">
                <img  data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.title}`} />
                <div className="like">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" class="svg-container">
                    <g filter="url(#filter0_b_26577_79)">
                        <ellipse cx="15" cy="15" rx="15" ry="15" fill="#F3F4F6" fill-opacity="0.5"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_26577_79" x="-2" y="-2" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26577_79"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26577_79" result="shape"/>
                        </filter>
                    </defs>
                    
                    <svg x="5" y="5" width="20" height="20" viewBox="0 0 20 20" fill="none" class="inner-svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill="#D1D5DB"/>
                    </svg>
                </svg>

                </div>
            </div>
            <Link to={`/movie/${movie.id}`} className="movie__details">
                <div className="py-3 running" data-testid="movie-release-date">{movie.release_date ? new Date(movie.release_date).toUTCString() : "N/A"}</div>
                <p data-testid="movie-release-date"></p>
                <h3 className="featured__movie--name" data-testid="movie-title">{movie.title}</h3>
                <div className="d-flex rating py-3">
                    <div className="imdb d-flex">
                        <img src={imdb} alt="" />
                        <p className="ms-3 rating-p">{Math.min(Math.floor(movie.popularity), 100)} / 100</p>
                    </div>
                    <div className="tomato d-flex ms-5">
                        <img src={tomato} alt="" />
                        <p className="ms-3 rating-p">{Math.round(movie.vote_average * 10)}%</p>
                    </div>
                </div>
                <div className="genre">{movie.tagline}</div>
            </Link>
        </div>    
    ));

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div className="movie__list d-flex mt-5">{movieCards}</div>
            )}
        </div>
    );
}
