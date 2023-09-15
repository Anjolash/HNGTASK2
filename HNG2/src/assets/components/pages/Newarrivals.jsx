import React from 'react';
import strangerthingsposter from '../../images/strangerthingsposter.png'
import imdb from '../../images/imdb.png';
import tomato from '../../images/tomato.png';
import Movie from './ui/Movie';

export default function Newarrivals() {
    return (
        <section id='featured' className=''>
            <div className="container">
                <div className="row ps-5">
                    <Movie />
                    
                </div>
            </div>
        </section>
    )
}
