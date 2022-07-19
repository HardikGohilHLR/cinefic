// Movie app - TV Shows Details

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../../common/hooks/useFetch';
import { convertMoney } from '../../../common/functions';

// Icons
import StarIcon from '../../../icons/Star';

// Components
import GetImage from '../../../components/utilities/get-image';

import PlayList from '../../../components/common/playlist';
import Cast from '../../../components/common/cast';
import SimilarMovies from '../../../components/common/similar';

const TVDetails = () => {

    const { id } = useParams();

    const { data: movieDetails } = useFetch(`/tv/${id}`, 'data');
    const { data: movieVideos } = useFetch(`/tv/${id}/videos`, 'data');

    const [movieTrailer, setMovieTrailer] = useState({});

    useEffect(() => {
        setMovieTrailer(movieVideos?.results?.find(_ => _?.name === 'Official Trailer' || _?.type === 'Trailer'))      
    }, [movieVideos]);

    console.log('movieDetails', movieDetails);
    
    return (
        <React.Fragment>

            <div className="cf_single-movie-sec">

                <div className="cf_single-movie__head" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}')`}}>
                    <div className="cf_single-movie__info">

                        <div className="d_flex d_align-center d_content-between">
                            <div className="cf_single-movie__info-title">
                                <h1>{movieDetails?.name}</h1>                                
                                {
                                    movieDetails?.tagline && <h5>{movieDetails?.tagline}</h5>
                                }
                            </div>
                            
                            {
                                movieTrailer && movieTrailer?.site === 'YouTube' &&
                                <div className="cf_single-movie__info-trailer">
                                    <a href={`https://www.youtube.com/watch?v=${movieTrailer?.key}`} target="_blank" rel="noopener noreferrer">
                                        Trailer
                                    </a>
                                </div>
                            }
                        </div>

                        <p>{movieDetails?.overview}</p>

                    </div>
                </div>

                <div className="cf_container"> 
                    
                    <div className="cf_single-movie__desc">
                        <div className="cf_single-movie__time">

                            <p>Seasons - {movieDetails?.number_of_seasons}</p>
                            <p>Total Episodes - {movieDetails?.number_of_episodes}</p>

                        </div>

                        <div className="cf_single-movie__votes">
                            <p>
                                {movieDetails?.vote_average?.toFixed(1)} | {convertMoney(movieDetails?.vote_count || 0)} Votes
                                <span>
                                    <StarIcon />
                                    TMDB
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Genre */}
                    {
                        movieDetails?.genres?.length !== 0 &&
                        <ul className="cf_single-movie__genres">
                            {
                                movieDetails?.genres?.map(genre => {
                                    return (
                                        <li key={genre?.id}>{genre?.name}</li>
                                    )
                                })
                            }
                        </ul>
                    }

                    {/* Cast */}
                    <Cast movieId={movieDetails?.id} type="tv" />

                    {/* Production */}
                    {
                        movieDetails?.production_companies?.length !== 0 &&
                        <div className="cf_single-movie__credits">
                            <h4 className="cf_single-movie__title">Production</h4>
                            <ul>
                                {
                                    movieDetails?.production_companies?.slice(0, 5).map(prod => {
                                        return (
                                            <li key={prod?.id} className="cf_single-movie__prod">
                                                <div className="cf_single-movie__prod-avatar">
                                                    <GetImage data={prod} path="logo_path" />
                                                </div>

                                                <div className="cf_single-movie__prod-name">
                                                    <p>{prod?.name}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }

                    {/* <a href={`https://www.imdb.com/title/${movieDetails?.imdb_id}`} target="_blank" rel="noopener noreferrer">
                        View on IMDB
                    </a> */}

                    {/* Videos */}
                    <PlayList movieVideos={movieVideos} type="tv" />
                </div>
            </div>
                        
            {/* Similar Shows */}
            <SimilarMovies movieId={movieDetails?.id} type="tv" />
            
        </React.Fragment>
    )
}

export default TVDetails;