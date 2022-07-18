// Home - Popular Movies
import React from 'react';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from './movie-card';

const PopularMovies = () => {

    const { data, loading } = useFetch('/movie/popular', 'data');

    console.log('popular', data);
   
    return (
        <React.Fragment>
            <div>
                <h2>Popular Movies</h2>


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

export default PopularMovies;