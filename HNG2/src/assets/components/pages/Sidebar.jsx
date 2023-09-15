import React from 'react';
import { Link } from 'react-router-dom';
import sitelogo from '../../images/tv.png';
import home from '../../images/home.png';
import movieProjector from '../../images/MovieProjector.png';
import tvShow from '../../images/TVShow.png';
import calendar from '../../images/Calendar.png';
import logout from '../../images/logout.png'

export default function Sidebar() {
    return (
        <section id='sidebar'>
            <div className="d-flex sidebarcssmessy mt-4 pt-2">
                <Link to="/" className="d-flex logo text-center">
                    <img src = {sitelogo} alt="" />
                    <h2 className='logo-text'>MovieBox</h2>
                </Link>
                <ul className="sidebar-nav py-4">
                    <li className="sidebar-nav__link d-flex">
                        <img className="sidebar__icon" src = {home} alt="" />
                        <Link to="/" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black">Home</Link>
                    </li>
                    <li className="sidebar-nav__link d-flex">
                        <img className="sidebar__icon" src = {movieProjector} alt="" />
                        <Link to="/" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black">Movies</Link>
                    </li>
                    <li className="sidebar-nav__link d-flex">
                        <img className="sidebar__icon" src = {tvShow} alt="" />
                        <Link to="/" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black">TV Series</Link>
                    </li>
                    <li className="sidebar-nav__link d-flex">
                        <img className="sidebar__icon" src = {calendar} alt="" />
                        <Link to="/" className="nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black">Upcoming</Link>
                    </li>
                </ul>
                <div className="play--quiz">
                    <h4>Play movie quizes and earn free tickets</h4>
                    <p>50k people are playing now</p>
                    <button>Start Playing</button>
                </div>
                <div className="logout d-flex py-4">
                    <img className="sidebar__icon" src = {logout} alt="" />
                    <Link to="/" className="nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black">Log Out</Link>
                </div>
            </div>    
        </section>
    )
}
