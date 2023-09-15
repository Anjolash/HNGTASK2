import React from 'react'
import strangerthingsposter from '../../images/strangerthingsposter.png'
import imdb from '../../images/imdb.png';
import tomato from '../../images/tomato.png';
import Movie from './ui/Movie';

export default function Featured() {
    return (
        <section id='featured' className=''>
            <div className="container">
                <div className="row ps-5">
                    <div className="featured__head">
                        <h2>Featured Movies</h2>
                        <div className="seemore">
                            <span>see more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <Movie />
                </div>
            </div>
        </section>
    )
}
