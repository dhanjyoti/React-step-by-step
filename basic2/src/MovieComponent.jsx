import React from 'react'
import { movies } from './Data/movieData'
import Movies from './Movies';
import './movie.css'


const fetchMovieData = ()=> {
    return movies;
}

const MovieComponent = () => {
    const movieData = fetchMovieData();

    return (
        <div className='movieContainer'>
            <h2>Movies</h2>
            <ul className='movieList'>
                {
                    movieData.map((movie) => {
                        return (
                            <Movies key={movie.id} movie={movie} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MovieComponent