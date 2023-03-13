import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../../helpers/axios';
const Row = ({title,fetchurl,islarge=false}) => {

    const [movies,setMovies] = useState([]);
    const base_url= "https://image.tmdb.org/t/p/original"

    useEffect(()=>{
        const fetchData = async()=>{
            const request = await axios.get(fetchurl);
            setMovies(request.data.results)

            return request
        }
        fetchData();
    },[fetchurl])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {
                movies.map((movie)=>
                ((islarge && movie.poster_path) ||(!islarge && movie.backdrop_path)) && (
                    <img  
                    key={movie.id}
                    className ={`row__poster ${islarge && "row__posterlarge"}`}
                    src={`${base_url}${islarge ? movie.poster_path : movie.backdrop_path}`}
                    alt=''/>
                )
                )
            }
        </div>
    </div>
  )
}

export default Row