// Movie
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from '@/app/api/axios';

import { IGenre } from '@/types/interface';
import GetImage from '@/components/utilities/get-image';

const useMovie = async (id: string) => {
    const response = await axios.get(`movie/${id}`);
    const data = await response?.data;
    return data;
}

const Movie = ({ movie }: any) => {

    const [movieDetails, setMovieDetails] = useState<any>({});

    useEffect(() => {
        if (movie?.id) {
            getMovieDetails();
        }
    }, [movie?.id]);

    const getMovieDetails = async () => {
        const data = await useMovie(movie?.id);
        setMovieDetails(data);
    }

    return (
        <>
            <div className="cf_banner">
                <div className="cf_banner-content">
                    <div className="cf_banner-content-info left">

                        <h5>Release Date: {moment(movie?.release_date)?.format('MMM DD')}</h5>

                        <h1>{movie?.title}</h1>

                        <h1>{movieDetails?.status}</h1>

                        <div>
                            <p>Genre</p>
                            <ul>
                                {
                                    movieDetails?.genres?.slice(0, 3)?.map((genre: IGenre) => {
                                        return (
                                            <li>{genre?.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <p>Authors</p>
                            <ul>
                                <li>Action</li>
                                <li>Drama</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cf_banner-content-info right">
                        <p>{movie?.overview}</p>
                    </div>
                </div>

                <div className="cf_banner-img">
                    <GetImage data={movie} path="backdrop_path" />
                </div>
            </div>
        </>
    )
}

export default Movie;