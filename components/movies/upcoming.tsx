// Upcoming movies
'use client';
import React, { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import axios from '@/app/api/axios';
import MovieCard from '@/components/common/movie-card';

const UpcomingMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();   
    }, []);

    const getMovies = async () => {
        const response = await axios.get('movie/upcoming');
        const data = await response?.data?.results;
        setMovies(data);  
    }

    const sliderOptions = (): Settings => {
        return {
            speed: 1000,
            slidesToShow: 5,
            autoplay: false,
            slidesToScroll: 5,
            infinite: false,
            arrows: true,
        }
    }

    return (
        <>
            <section>
                <div className="cf_container">

                    <h2>Upcoming Movies</h2>

                    <div className="cf_movie-cards">
                        <Slider {...sliderOptions()}>
                            {
                                movies?.map((movie: any) => {
                                    {console.log(movie)}
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} />
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpcomingMovies;