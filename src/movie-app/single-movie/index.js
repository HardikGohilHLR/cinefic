// Movie app - Movie Details

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../common/hooks/useFetch';
import { formatDate, convertMinsToHrsMins, convertMoney } from '../../common/functions';

// Icons
import StarIcon from '../../icons/Star';

// Components
import GetImage from '../../components/get-image';
import SimilarMovies from './components/similar';

const SingleMovie = () => {

    const { id } = useParams();

    const { data: movieDetails } = useFetch(`/movie/${id}`, 'data');
    const { data: movieCast } = useFetch(`/movie/${id}/credits`, 'data');
    const { data: movieVideos } = useFetch(`/movie/${id}/videos`, 'data');

    const [movieTrailer, setMovieTrailer] = useState({});

    // console.log('single movie', movieDetails);
    // console.log('single movie cast', movieCast);
    // console.log('single movieVideos', movieVideos);

    useEffect(() => {
        setMovieTrailer(movieVideos?.results?.find(_ => _?.name === 'Official Trailer' || _?.type === 'Trailer'))      
    }, [movieVideos]);
    
    const viewAllCast = () => {

    }

    return (
        <React.Fragment>

            <div className="cf_single-movie-sec">

                <div className="cf_single-movie__head" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}')`}}>
                    <div className="cf_single-movie__info">

                        <div className="d_flex d_align-center d_content-between">
                            <div className="cf_single-movie__info-title">
                                <h1>{movieDetails?.title}</h1>                                
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
                            <p>{convertMinsToHrsMins(movieDetails?.runtime)}</p>
                            <p>{formatDate(movieDetails?.release_date, 'Do, MMMM YYYY')}</p>
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
                    {
                        movieCast?.cast?.length !== 0 &&
                        <div className="cf_single-movie__credits">
                            <h4 className="cf_single-movie__title">Cast</h4>
                            <ul>
                                {
                                    movieCast?.cast?.slice(0, 5).map(cast => {
                                        return (
                                            <li className="cf_single-movie__cast" key={cast?.id}>
                                                <div className="cf_single-movie__cast-avatar">
                                                    <GetImage data={cast} path="profile_path" />
                                                </div>

                                                <div className="cf_single-movie__cast-name">
                                                    { cast?.character?.split('/')?.[0] && <p>{cast?.character?.split('/')?.[0]}</p> }
                                                    { cast?.original_name && <span>{cast?.original_name}</span> }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                
                                <li className="cf_single-movie__cast">
                                    <div className="cf_single-movie__cast-avatar view" onClick={viewAllCast}>
                                        <span>View All</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                    
                    {/* Production */}
                    {
                        movieDetails?.production_companies?.length !== 0 &&
                        <div className="cf_single-movie__credits">
                            <h4 className="cf_single-movie__title">Production</h4>
                            <ul>
                                {
                                    movieDetails?.production_companies?.slice(0, 5).map(cast => {
                                        return (
                                            <li key={cast?.id} className="cf_single-movie__prod">
                                                <div className="cf_single-movie__prod-avatar">
                                                    <GetImage data={cast} path="logo_path" />
                                                </div>

                                                <div className="cf_single-movie__prod-name">
                                                    <p>{cast?.name}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }                     
                    
                    {/* <p>Budget: {convertMoney(movieDetails?.budget || 0) || '-'}</p>
                    
                    <p>Revenue: {convertMoney(movieDetails?.revenue || 0) || '-'}</p> */}

                    <a href={`https://www.imdb.com/title/${movieDetails?.imdb_id}`} target="_blank" rel="noopener noreferrer">
                        View on IMDB
                    </a>
                </div>
            </div>
                        
            {/* Similar Movies */}
            <SimilarMovies movieId={movieDetails?.id} />
            
        </React.Fragment>
    )
}

export default SingleMovie;