// Home - Upcoming Movies
import React from 'react';

import useFetch from '../../../common/hooks/useFetch';
import MovieCard from './movie-card';

const UpcomingMovies = () => {
    
    const { data, loading } = useFetch('/movie/upcoming', 'data');

    console.log('upcoming', data);
   
    return (
        <React.Fragment>
            <div>
                <h2>Upcoming Movies</h2>
                
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

export default UpcomingMovies;
