import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../NavBar'
import './index.css'
import MovieCard from '../MovieCard'

const Home = () => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
        .then((response)=>{
            setMovies(response.data.results)
        }).catch((err)=>console.log(err))
    },[])
    const clickData =()=>{ 
    }

  return (
    <div className='Home'>
      <Navbar/>
      <div className='movie-list'>
        {movies.map((each,index)=>{
            return <MovieCard key={index} details={each} clickData={clickData}  />
        })}
      </div>
    </div>
  )
}
export default Home;