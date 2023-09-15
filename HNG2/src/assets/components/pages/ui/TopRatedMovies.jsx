import React, { useState, useEffect } from 'react';
import Movie from './Movie'; 

export default function TopRatedMovies({ topRatedMovies }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const renderTopRatedMovies = () => {
        if (loading) {
            return <p>Loading...</p>;
        } else if (error) {
            return <p>Error: {error.message}</p>;
        } else if (topRatedMovies.length === 0) {
            return <p>No top-rated movies available.</p>;
        } else {
            return (
                <div>
                    {topRatedMovies.slice(0, 10).map((movie) => (
                        <Movie key={movie.id} movieId={movie.id} />
                    ))}
                </div>
            );
        }
        
    };

    return (
        <div>
            <h2>Top 10 Rated Movies</h2>
            {renderTopRatedMovies()}
        </div>
    );
}
