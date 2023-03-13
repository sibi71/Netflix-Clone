import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Row from '../../Components/Row/Row'
import requests from '../../helpers/requests'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Banner />

        <Row 
        title="NETFLIX ORIGINAL"
        fetchurl={requests.fetchNetflixOriginals}
        islarge
        />
        <Row 
        title="Trending Now"
        fetchurl={requests.fetchTrending}
        />
        <Row 
        title="Top Rated"
        fetchurl={requests.fetchTopRated}
        />
        <Row 
        title="Action Movies"
        fetchurl={requests.fetchActionMovies}
        />
        <Row 
        title="Comedy Movies"
        fetchurl={requests.fetchComedymovies}
        />
         <Row 
        title="Horror Movies"
        fetchurl={requests.fetchHorrorMovies}
        />
         <Row 
        title="Romance Movies"
        fetchurl={requests.fetchRomanceMovies}
        />
         <Row 
        title="Documentaries"
        fetchurl={requests.fetchDocumentaries}
        />
        

    </div>
  )
}

export default Home