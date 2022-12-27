import React from 'react'
import './Banner.css';
import { API_KEY,imageUrl } from '../../constants/Constants';
import axios from '../axios'
import {useEffect,useState} from 'react'


function Banner() {
  const [Movie, setMovie] = useState()
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
    
    var randomMovie=Math.floor(Math.random() *20)+1;

    setMovie(response.data.results[randomMovie])
    
   })
  },[])

    
  
  
  return (
    <div 
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path : ""})`}}
    className='banner'>
    <div className='content'>
         <h1 className='title'>{Movie ? Movie.title : ""}</h1>
          <div className='banner-buttons'>
            <button className='btn'> play </button>
            <button className='btn'> My list </button>
          </div>
          <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
          <div className="fade-bottom">
            
          </div>
    </div>

    </div>
  )
}

export default Banner