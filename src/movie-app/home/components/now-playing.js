// Home - Now Playing Movies
import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from '../../../components/movie-card';

const NowPlayingMovies = () => {

    const { data, loading } = useFetch('/movie/now_playing', 'data', 'region=IN');

    console.log('now_playing', data, loading);
   
    return (
        <React.Fragment>
            <div className="cf_movies-sec">

                <div className="cf_container">

                    <div className="cf_movies-sec__header">
                        <h3>Now Playing Movies</h3>

                        <Link to="/movies/now-playing">View All</Link>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 20)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} />
                                    )
                                })
                        }
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default NowPlayingMovies;
