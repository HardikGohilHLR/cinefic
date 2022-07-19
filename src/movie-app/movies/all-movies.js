// Movies - All Movies
import React, { useMemo } from 'react';
import useFetch from '../../common/hooks/useFetch';

// Components
import MovieCard from '../../components/movie-card';

const NowPlayingMovies = ({movies}) => {

    const { data, loading } = useFetch(`/movie/${movies}`, 'data');

    const getTitle = useMemo(() => {
        return movies?.split('_').join(' ');
    }, [movies]);

    return (
        <React.Fragment>
            <div className="cf_home">

                <div className="cf_movies-sec">

                    <div className="cf_container">

                        <div className="cf_movies-sec__header">
                            <h3 className="fb_text-c">{getTitle} Movies</h3>
                        </div>
                        
                        <div className="cf_movies-sec__group">
                            {
                                (data?.length !== 0 || loading) &&

                                    data?.results?.map(movie => {
                                        return (
                                            <MovieCard movie={movie} key={movie?.id} loading={loading} />
                                        )
                                    })
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NowPlayingMovies;