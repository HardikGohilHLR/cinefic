// Movie Details - Playlist
import React from 'react';

import Slider from "react-slick";

const PlayList = ({movieVideos}) => {
    
    const settings = {
        arrow: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <React.Fragment>            
            {
                movieVideos?.results?.length !== 0 &&
                <div className="cf_single-movie__videos">
                    <h4 className="cf_single-movie__title">Playlist</h4>
                    <Slider {...settings}>
                        {
                            movieVideos?.results?.map(video => {
                                return (
                                    video?.site === 'YouTube' &&
                                    <div className="cf_single-movie__video">
                                        <div className="cf_single-movie__video-thumb">
                                            <img src={`http://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`} />
                                        </div>
                                        <div className="cf_single-movie__video-title">
                                            <p>{video?.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            }
        </React.Fragment>
    )
}

export default PlayList;