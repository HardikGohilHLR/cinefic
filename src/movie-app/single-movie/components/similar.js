// Movie Details - Similar Movies
import React from 'react';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from '../../../components/movie-card';

const SimilarMovies = ({movieId}) => {
    
    const { data, loading } = useFetch(`/movie/${movieId}/similar`, 'data');
   
    return (
        <React.Fragment>
            <div className="cf_movies-sec">
                <div className="cf_container">

                    <div className="cf_movies-sec__header">
                        <h3>Similar Movies</h3>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 5)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} type="similar" />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SimilarMovies;
