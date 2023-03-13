const API_KEY ="dbf6a656f381897e5d67b79c72fbbd3a";


export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedymovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

};