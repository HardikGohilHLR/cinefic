// Banner
'use client';
import React from 'react';

import Slider, { Settings } from 'react-slick';
import Movie from './movie';

const Banner = ({ movies }: any) => {

    const sliderOptions = (): Settings => {
        return {
            speed: 1000,
            slidesToShow: 1,
            autoplay: false,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: false,
            arrows: false,
        }
    }

    return (
        <>
            <Slider {...sliderOptions()} className="cf_banner">
                {
                    movies?.map((movie: any) => {
                        return (
                            <Movie key={movie?.id} movie={movie} />
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default Banner;