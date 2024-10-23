import React, { useEffect, useState } from 'react'
import './index.css'
import NavBar from '../NavBar'
import { useParams } from 'react-router-dom'

const Search = () => {
    const { query } = useParams()
    const key = 'c45a857c193f6302f2b5061c3b85e743'
    const [suggestions, setSuggestions] = useState([])
    console.log(suggestions, 'sugg')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}`)
            .then(res => res.json())
            .then(res => setSuggestions(res.results))
    },[query])

    return (
        <div className='single-movie search'>
            <NavBar />
            {suggestions && suggestions.map(sug => (
                <div className='singlemovie-card'>
                    <img src={`https://image.tmdb.org/t/p/w500/${sug.backdrop_path}`} height='100px' width='' className='bg-image' alt={sug.id} />
                    <div className='d-flex a-center'>
                        <div className='img-card'>
                            <img src={`https://image.tmdb.org/t/p/w500/${sug.poster_path}`} height='100px' width='' className='movie-title' alt={sug.id} />
                        </div>
                        <div>
                            <h2>{sug.original_title}</h2>
                            <h4>Rating: {sug.vote_average}</h4>
                            <p>{sug.vote_average} min &nbsp; {sug.tagline}</p>
                            <p>releasing Data: {sug.release_date}</p>
                            <p>Original-Language:{sug.original_language}</p>
                        </div>
                    </div>
                    <div className='overview'>
                        <h2>Overview</h2>
                        <p>{sug.overview}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Search;