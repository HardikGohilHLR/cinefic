// Home - Top Rated Movies
import React from 'react';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from './movie-card';

const TopRatedMovies = () => {

    const { data, loading } = useFetch('/movie/top_rated', 'data');

    console.log('Top Rated', data);
   
    return (
        <React.Fragment>
            <div>
                <h2>Top Rated Movies</h2>

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

export default TopRatedMovies;