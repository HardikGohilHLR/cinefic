// Home - Movie Card
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GetMovieImage } from '../../../common/functions';

const MovieCard = ({movie}) => {

    const navigate = useNavigate();

    const getMovieDetails = () => {
        navigate(`movie/${movie?.id}`);
    }

    return (
        <React.Fragment>

            <div className="c_movie-card" key={movie?.id} onClick={getMovieDetails}>
                <GetMovieImage movie={movie} />
                <p>{movie?.title}</p>
            </div>

        </React.Fragment>
    )
}

export default MovieCard;