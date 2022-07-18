// Home - Upcoming Movies

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GetMovieImage } from '../../../common/functions';
import useFetch from '../../../common/hooks/useFetch';

const UpcomingMovies = () => {

    const navigate = useNavigate();

    const { data, loading } = useFetch('/movie/upcoming', 'data');

    console.log('upcoming', data);

    const getMovieDetails = (id) => {
        navigate(`movie/${id}`);
    }
   
   
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
                                    data?.results?.slice(10)?.map(movie => {
                                        return (
                                            <div key={movie?.id} onClick={() => getMovieDetails(movie?.id)}>
                                                <GetMovieImage movie={movie} />
                                                <p>{movie?.title}</p>
                                            </div>
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
