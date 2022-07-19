// TV Shows - Today Airing
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../../common/hooks/useFetch';

// Icons
import RightArrowIcon from '../../../icons/RightArrow';

// Components
import MovieCard from '../../../components/movie-card';

const TvShowsList = ({tvShowType}) => {

    const { data, loading } = useFetch(`/tv/${tvShowType}`, 'data');
   
    const getTitle = useCallback((joinBy) => {
        return tvShowType?.split('_').join(joinBy);
    }, [tvShowType]);

    return (
        <React.Fragment>
            <div className="cf_movies-sec">

                <div className="cf_container">

                    <div className="cf_movies-sec__header">
                        <h3 className="cf_text-c">{getTitle(' ')} Shows</h3>

                        <Link to={`/tv-shows/${getTitle('-')}`} className="cf_movies-sec__header-view">
                            View All
                            <RightArrowIcon />
                        </Link>
                    </div>
                    
                    <div className="cf_movies-sec__group">
                        {
                            (data?.length !== 0 || loading) &&

                                data?.results?.slice(0, 5)?.map(movie => {
                                    return (
                                        <MovieCard movie={movie} key={movie?.id} loading={loading} showType="tv" type={tvShowType} />
                                    )
                                })
                        }
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default TvShowsList;
