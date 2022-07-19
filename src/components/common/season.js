// TV Shows - Seasons
import React, { useEffect, useState } from 'react';
import { convertMinsToHrsMins, convertMoney, formatDate } from '../../common/functions';

import useFetch from '../../common/hooks/useFetch';

import ChevronDownIcon from '../../icons/ChevronDown';
import StarIcon from '../../icons/Star';

const Seasons = ({movieDetails}) => {

    const [currentSeason, setCurrentSeason] = useState(null);
    const [isSeasonsOpen, setIsSeasonsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('episodes');

    const { data: tvShowSeason } = useFetch(`/tv/${movieDetails?.id}/season/${currentSeason?.season_number}`, 'data');

    console.log('tvShowEp', tvShowSeason);

    useEffect(() => {
        setCurrentSeason(movieDetails?.seasons[movieDetails?.seasons?.length - 1]);
    }, [movieDetails]);
    
    const changeSeason = season => {
        setIsSeasonsOpen(false);
        setCurrentSeason(season);
    }

    const showAllSeason = () => {
        setIsSeasonsOpen(!isSeasonsOpen);
    }

    return (
        <React.Fragment>
            
            <div className="cf_tv-season">
                
                <div className="cf_tv-season__select">

                    <button className="cf_tv-season__select-current" onClick={showAllSeason}>
                        { currentSeason?.name }

                        <ChevronDownIcon fill="#FFFFFF" />
                    </button>

                    {
                        isSeasonsOpen &&
                        <ul className="cf_tv-season__list">
                            {
                                movieDetails?.seasons?.map(season => {
                                    return (
                                        // season?.name?.includes('Season') &&
                                        <li 
                                            key={season?.id} 
                                            onClick={() => changeSeason(season)}
                                            className={`${season?.season_number !== currentSeason?.season_number ? '' : 'cf_pointer-none'}`}
                                        >
                                            { season?.name }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>


                <div className="cf_tv-season__section">
                
                    <div className="cf_tv-season__tabs">
                        <ul>
                            <li className={`${activeTab === 'episodes' ? 'active' : ''}`} onClick={() => setActiveTab('episodes')}>Episodes</li>
                            <li className={`${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Details</li>
                        </ul>
                    </div>

                    
                    <div className="cf_tv-season__section-content">
                        {
                            activeTab === 'episodes' &&
                            <div className="cf_tv-season__episode-list">

                                <h4> {currentSeason?.episode_count} Episodes</h4>

                                <div className="cf_tv-season__episode-list-wpr">
                                    <ul>
                                        {
                                            tvShowSeason?.episodes?.slice(0, 8)?.map(episode => {
                                                return (
                                                    <li className="cf_tv-season__episode" key={episode?.id}>

                                                        <div className="cf_tv-season__episode-image">

                                                            <img src={`https://image.tmdb.org/t/p/original${episode?.still_path}`} />

                                                            <div className="cf_single-movie__votes">
                                                                <p>
                                                                    <span>
                                                                        <StarIcon />
                                                                        {episode?.vote_average?.toFixed(1) }
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="cf_tv-season__episode-info">
                                                            <h5 className="ellipsis ellipsis-1">E{episode?.episode_number}: {episode?.name}</h5>
                                                            
                                                            <div className="cf_single-movie__time">
                                                                <p>Date: {formatDate(episode?.air_date, 'Do, MMM YYYY')}</p>
                                                                <p>{convertMinsToHrsMins(episode?.runtime)}</p>
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        }
                        
                        {
                            activeTab === 'details' &&
                            <div className="cf_tv-season__details">
                                <h4 className="cf_single-movie__title mb-10">Overview</h4>
                                <p>{tvShowSeason?.overview}</p>
                            </div>
                        }
                    </div>
                </div>


            </div>

        </React.Fragment>
    )
}

export default Seasons;