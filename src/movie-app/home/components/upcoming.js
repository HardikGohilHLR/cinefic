// Home - Upcoming Movies
import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from '../../../components/movie-card';

const UpcomingMovies = () => {
    
    const { data, loading } = useFetch('/movie/upcoming', 'data');

    console.log('upcoming', data);
   
    return (
        <React.Fragment>
            <div className="cf_movies-sec">

                <div className="cf_movies-sec__header">
                    <h3>Upcoming Movies</h3>

                    <Link to="/movies/upcoming">View All</Link>
                </div>
                
                <div className="cf_movies-sec__group">
                    {
                        (data?.length !== 0 || loading) &&

                            data?.results?.slice(0, 5)?.map(movie => {
                                return (
                                    <MovieCard movie={movie} key={movie?.id} loading={loading} />
                                )
                            })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default UpcomingMovies;
