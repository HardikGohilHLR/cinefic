// Home - Latest Movies

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GetMovieImage } from '../../../common/functions';
import useFetch from '../../../common/hooks/useFetch';

const LatestMovies = () => {

    const navigate = useNavigate();
    const { data, loading } = useFetch('/movie/latest', 'data');

    console.log('latest', data);

    const getMovieDetails = (id) => {
        navigate(`movie/${id}`);
    }
   
    return (
        <React.Fragment>
            <div>
                <h2>Latest Movie</h2>

                <div>
                    {
                        data?.length !== 0 || loading ?
                            loading ?
                                <div>Loading</div>
                            :
                            <div key={data?.id} onClick={() => getMovieDetails(data?.id)}>
                                <GetMovieImage movie={data} />
                                <p>{data?.title}</p>
                            </div>

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

export default LatestMovies;