// Home - Movie Card
import React from 'react';
import { useRouter } from 'next/navigation';

import GetImage from '@/components/utilities/get-image';

type IMovieCardProps = {
    movie: any;
    loading?: boolean;
    showType?: string;
    type?: string;
}

const MovieCard = ({ movie, loading, showType = 'movie', type }: IMovieCardProps) => {
    const router = useRouter();

    const getMovieDetails = () => {
        router.push(`/${showType}/${movie?.id}`);
    }

    return (
        <React.Fragment>
            <div className="cf_movie-card" onClick={() => getMovieDetails()}>
                <div className="cf_movie-card__rating">
                    <span>{movie?.vote_average?.toFixed(1)}</span>
                </div>

                <div className="cf_movie-card__image">
                    <GetImage data={movie} path="poster_path" />
                </div>

                <div className="cf_movie-card__info">
                    <h5>{movie?.title}</h5>
                </div>
            </div>

        </React.Fragment>
    )
}

export default MovieCard;