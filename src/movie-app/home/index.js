// Movie app - Home
import React from 'react';

// Components
import UpcomingMovies from './components/upcoming';
import TopRatedMovies from './components/top-rated';
import PopularMovies from './components/popular';
import LatestMovies from './components/latest';
import NowPlayingMovies from './components/now-playing';

const Home = () => {

    return (
        <React.Fragment>
            <div className="cf_home">

                {/* Latest Movies */}
                {/* <LatestMovies /> */}

                {/* Upcoming Movies */}
                <NowPlayingMovies />

                {/* Upcoming Movies */}
                <UpcomingMovies />

                {/* Top Rated Movies */}
                <TopRatedMovies />

                {/* Popular Movies */}
                <PopularMovies />  
    `
            </div>
        </React.Fragment>
    )
}

export default Home;