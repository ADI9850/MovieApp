import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'
import './index.css'
import NavBar from '../NavBar'

const UpcomingMovies = () => {
    const [topRated, setTopRated] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1').then((response) => {
            setTopRated(response.data.results)
        }).catch((err) => console.log(err))
    }, [])
    console.log(topRated, 'top')
    return (
        <div className='topRate'>
            <NavBar />
            <div className='movie-list'>
                {topRated.map((each, index) => {
                    return <MovieCard key={index} details={each} />
                })}
            </div>
        </div>
    )
}


export default UpcomingMovies;