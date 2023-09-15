import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sitelogo from '../../images/tv.png';
import imdb from '../../images/imdb.png';
import tomato from '../../images/tomato.png';

export default function Landing() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        const filteredMovies = movieData.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredMovies);
    }, [searchQuery, movieData]);

    const handleClearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
    };

    return (
        <div className='landing'>
            <div id="header" className='container'>
                <nav className="navbar py-4 mb-4">
                    <div className="d-flex logo text-center">
                        <img src={sitelogo} alt="" />
                        <h2 className='logo-text'>MovieBox</h2>
                    </div>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search for a movie..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {searchQuery.trim() !== '' && (
                            <div className="container search-results-container">
                                <div className="row">
                                    <div className="search-results">
                                        {searchResults.length > 0 ? (
                                            <ul className="search-results-list">
                                                {searchResults.map((movie) => (
                                                    <li key={movie.id}>
                                                        <Link to={`/movie/${movie.id}`}>
                                                            {movie.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No results found</p>
                                        )}
                                        <button className='clear--search' onClick={handleClearSearch}>Clear Search</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="d-flex menu">
                        <p className="first__para">Sign In</p>
                        <div className="sign__in--button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <circle cx="18" cy="18" r="18" fill="#BE123C" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" x="6" y="6">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white" />
                                </svg>
                            </svg>
                        </div>
                    </div>
                </nav>
                <div id="description__box" >
                    <h1>John Wick 3: Parabellum</h1>
                    <div className="d-flex rating py-3">
                        <div className="imdb d-flex">
                            <img src={imdb} alt="" />
                            <p className="ms-3 rating-p"> 86.00 / 100 </p>
                        </div>
                        <div className="tomato d-flex ms-5">
                            <img src={tomato} alt="" />
                            <p className="ms-3 rating-p">97%</p>
                        </div>
                    </div>
                    <p className="description">
                        John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                    </p>
                    <button className='trailer-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.55470 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white" />
                        </svg>
                        <p>Watch trailer</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
