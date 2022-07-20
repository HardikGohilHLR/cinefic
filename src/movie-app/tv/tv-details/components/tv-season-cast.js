// Tv Details - TV Season Cast
import React from 'react';

import useFetch from '../../../../common/hooks/useFetch';
import GetImage from '../../../../components/utilities/get-image';

const TVSeasonCast = ({movieId, currentSeason}) => {

    const { data: tvShowSeasonCast } = useFetch(`/tv/${movieId}/season/${currentSeason?.season_number}/credits`, 'data');

    const viewAllCast = () => {

    }

    return (
        <React.Fragment>
            <div className="cf_tv-season__episode-list">
                {
                    tvShowSeasonCast?.cast?.length !== 0 &&
                    <div className="cf_single-movie__credits">
                        <h4 className="cf_single-movie__title">Cast</h4>
                        <ul>
                            {
                                tvShowSeasonCast?.cast?.slice(0, 5)?.map(cast => {
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
            </div>
        </React.Fragment>
    )
}

export default TVSeasonCast;