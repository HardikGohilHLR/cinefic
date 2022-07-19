// Home - Popular Movies
import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../../common/hooks/useFetch';

// Icons
import RightArrowIcon from '../../../icons/RightArrow';

// Components
import MovieCard from '../../../components/movie-card';

const PopularMovies = () => {

    const { data, loading } = useFetch('/movie/popular', 'data');
   
    return (
        <React.Fragment>
            <div className="cf_movies-sec">

                <div className="cf_container">
                    <div className="cf_movies-sec__header">
                        <h3>Popular Movies</h3>

                        <Link to="/movies/popular" className="cf_movies-sec__header-view">
                            View All
                            <RightArrowIcon />
                        </Link>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 5)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} type="popular" />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PopularMovies;