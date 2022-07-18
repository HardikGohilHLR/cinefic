// Home - Now Playing Movies
import React from 'react';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from './movie-card';

const NowPlayingMovies = () => {

    const { data, loading } = useFetch('/movie/now_playing', 'data', 'region=IN');

    console.log('now_playing', data);
   
    return (
        <React.Fragment>
            <div>
                <h2>Now Playing Movies</h2>
                
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        data?.length !== 0 || loading ?
                            loading ?
                                <div>Loading</div>
                            :
                            <>
                                {
                                    data?.results?.slice(0, 10)?.map(movie => {
                                        return (
                                            <MovieCard movie={movie} key={movie?.id} />
                                        )
                                    })
                                }
                            </>

                        :
                        <div>
                            No data found
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default NowPlayingMovies;
