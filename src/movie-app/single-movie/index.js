// Movie app - Single Movie

import React from 'react';
import { useParams } from 'react-router-dom';

import { GetMovieImage } from '../../common/functions';
import useFetch from '../../common/hooks/useFetch';

const SingleMovie = () => {

    const { id } = useParams();

    const { data } = useFetch(`/movie/${id}`, 'data');     

    return (
        <React.Fragment>

            <div>
                <GetMovieImage movie={data} />
                <p>{data?.title}</p>
            </div>

        </React.Fragment>
    )
}

export default SingleMovie;