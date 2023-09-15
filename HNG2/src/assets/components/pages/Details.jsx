import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import trailerimg from '../../images/Poster.png';
import rectangle4 from '../../images/Rectangle37.png';

export default function Details() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const apiKey = 'a52c0c31d17a115f2be15d08233a9193';
                const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setMovieDetails(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchMovieDetails();
    }, [id]);

    for (const key in movieDetails) {
        if (movieDetails.hasOwnProperty(key)) {
            console.log(key + ':', movieDetails[key]);
        }
    }

    return (
        <section id='details'>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div className="d-flex detailsbox-1">
                    <div className="movie-trailer">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="" />
                    </div>
                    <div className="d-flex detailsbox-2">
                        <div className="overview">
                            <div className="movie-title d-flex">
                                <h2 data-testid="movie-title">{movieDetails.title}</h2>
                                <p data-testid="movie-release-date">{movieDetails.release_date ? new Date(movieDetails.release_date).toUTCString() : "N/A"}</p>
                                <span>{movieDetails.rating}</span>
                                <span><span data-testid="movie-runtime">{movieDetails.runtime}</span>m</span>
                                {movieDetails.genres.map((genre) => (
                                    <span key={genre.id}>{genre.name}</span>
                                ))}
                            </div>
                            <p className="movie-para" data-testid="movie-overview">{movieDetails.overview}</p>
                            <div className="screenwrites">
                            <h4>Director : <span>Joseph Koninski</span></h4>
                            <h4>Writers : <span>Joseph Koninski</span></h4>
                            <h4>Stars : <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></h4>
                            </div>
                            <div className="doings mt-4 d-flex">
                                <button className="toprated">Top rated movie #{movieDetails.topRatedRank}</button>
                                <button className="nominations">Top rated movie #{movieDetails.topNominationsRank}</button>
                            </div>
                        </div>
                        <div className="extra">
                            <button>See Showtimes</button>
                            <button className='secondcolor'>More watch options</button>
                            <figure>
                                <img src={rectangle4} alt="" />
                                <span>The Best Movies and Shows in September</span>
                            </figure>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
