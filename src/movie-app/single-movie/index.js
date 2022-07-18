// Movie app - Single Movie

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { formatDate, convertMinsToHrsMins, convertMoney } from '../../common/functions';
import useFetch from '../../common/hooks/useFetch';
import GetImage from '../../components/get-image';

const SingleMovie = () => {

    const { id } = useParams();

    const { data: movieDetails } = useFetch(`/movie/${id}`, 'data');
    const { data: movieCast } = useFetch(`/movie/${id}/credits`, 'data');
    const { data: movieVideos } = useFetch(`/movie/${id}/videos`, 'data');

    const [movieTrailer, setMovieTrailer] = useState({});

    console.log('single movie', movieDetails);
    console.log('single movie cast', movieCast);
    console.log('single movieVideos', movieVideos);

    useEffect(() => {
        console.log('asdasd', movieVideos?.results?.find(_ => _?.name === 'Official Trailer' || _?.type === 'Trailer'));
        setMovieTrailer(movieVideos?.results?.find(_ => _?.name === 'Official Trailer' || _?.type === 'Trailer'))      
    }, [movieVideos]);
    

    return (
        <React.Fragment>

            <div className="cf_single-movie-sec">
                        
                {/* <div className="cf_single-movie__info">
                    <img src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`} alt={movieDetails?.title} />
                </div> */}

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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" fill="#f5c518" />
                                </svg>
                                {movieDetails?.vote_average?.toFixed(1)} ({convertMoney(movieDetails?.vote_count || 0)} Votes)
                            </p>
                        </div>
                    </div>
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
                                            <li key={cast?.id} className="cf_single-movie__cast">
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
                                        console.log('cast', cast);
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


        </React.Fragment>
    )
}

export default SingleMovie;