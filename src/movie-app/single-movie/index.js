// Movie app - Single Movie

import React from 'react';
import { useParams } from 'react-router-dom';

import { formatDate, GetMovieImage, convertMinsToHrsMins, convertMoney } from '../../common/functions';
import useFetch from '../../common/hooks/useFetch';

const SingleMovie = () => {

    const { id } = useParams();

    const { data: movieDetails } = useFetch(`/movie/${id}`, 'data');
    const { data: movieCast } = useFetch(`/movie/${id}/credits`, 'data');
    const { data: movieVideos } = useFetch(`/movie/${id}/videos`, 'data');

    console.log('single movie', movieDetails);
    console.log('single movie cast', movieCast);
    console.log('single movieVideos', movieVideos);

    return (
        <React.Fragment>

            <div className="c_single-movie">

                <div className="c_container">
                    
                    <div className="c_single-movie-wpr">
                        <GetMovieImage movie={movieDetails} />
                        <h4>{movieDetails?.title}</h4>
                        <h5>{movieDetails?.tagline}</h5>

                        {
                            movieCast?.cast?.length !== 0 &&
                            <>
                            <h4>Cast</h4>
                            <ul className="u_movie-cast mb-10 d_flex">

                                {
                                    movieCast?.cast?.slice(0, 5).map(cast => {
                                        return (
                                            <li key={cast?.id} className="d_flex">
                                                <div>
                                                    <img src={`https://image.tmdb.org/t/p/original${cast?.profile_path}`} height="70" width="100"/>
                                                </div>
                                                <div>
                                                    <p>{cast?.character}</p>
                                                    <p>{cast?.original_name}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            </>
                        }

                        {
                            movieDetails?.genres?.length !== 0 &&
                            <ul className="u_movie-genres mb-10">
                                {
                                    movieDetails?.genres?.map(genre => {
                                        return (
                                            <li key={genre?.id}>{genre?.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        }

                        {
                            movieDetails?.production_companies?.length !== 0 &&
                            <ul className="u_movie-genres mb-10">
                                {
                                    movieDetails?.production_companies?.map(production => {
                                        return (
                                            <li key={production?.id}>
                                                <img src={`https://image.tmdb.org/t/p/original${production?.logo_path}`} height="70" width="100"/>
                                                <p>{production?.name}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }


                        {
                            movieDetails?.production_countries?.length !== 0 &&
                            <ul className="u_movie-genres mb-10">
                                {
                                    movieDetails?.production_countries?.map(production => {
                                        return (
                                            <li key={production?.id}>{production?.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        }

                        <div>
                            <img src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`} height="200"/>
                        </div>

                        <p>Storyline: {movieDetails?.overview}</p>

                        <p>Release Date: {formatDate(movieDetails?.release_date, 'ddd, MMM Do, YYYY')}</p>
                        
                        <p>Runtime: {convertMinsToHrsMins(movieDetails?.runtime)}</p>
                        
                        <p>Budget: {convertMoney(movieDetails?.budget || 0) || '-'}</p>
                        
                        <p>Revenue: {convertMoney(movieDetails?.revenue || 0) || '-'}</p>

                        <p>Vote: {movieDetails?.vote_average}/10 - {convertMoney(movieDetails?.vote_count || 0)} Votes</p>

                        <a href={`https://www.imdb.com/title/${movieDetails?.imdb_id}`} target="_blank" rel="noopener noreferrer">
                            View on IMDB
                        </a>
                    </div>


                </div>
                 
            </div>

        </React.Fragment>
    )
}

export default SingleMovie;