import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const NavBar = () => {
    const navigate = useNavigate();
    const key = 'c45a857c193f6302f2b5061c3b85e743';
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const getSuggestions = (value) => {
        setQuery(value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${value}`)
            .then(res => res.json())
            .then(res => setSuggestions(res.results));
    };

    const ClickMovieBtn = (id) => {
        navigate(`/onemovie/${id}`);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar ${menuOpen ? 'show-menu' : ''}`}>
            <h2>MovieDb</h2>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰ {/* Hamburger icon */}
            </div>
            <div className='nav-items-card'>
                <Link to='/' className='link'>
                    <h3>Popular</h3>
                </Link>
                <Link to='/top' className='link'>
                    <h3>Top Rated</h3>
                </Link>
                <Link to='/upcoming' className='link'>
                    <h3>UpComing</h3>
                </Link>
                <div className='input-with-suggestions'>
                    <input
                        type='text'
                        placeholder='Movie Name'
                        className='input'
                        onChange={(e) => getSuggestions(e.target.value)}
                    />
                    {suggestions && suggestions.length > 0 ? (
                        <div className='suggestions'>
                            {suggestions.map(sugg => (
                                <div className='suggestion' key={sugg.id} onClick={() => ClickMovieBtn(sugg.id)}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${sugg.poster_path}`} alt={sugg.title} />
                                    <div>{sugg.title}</div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <Link to={`/search/${query}`} className='link'>
                    <button className='seacrh-btn'>Search</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
