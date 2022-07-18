// Movie app - Home

import React from 'react';

import UpcomingMovies from './components/upcoming';
import TopRatedMovies from './components/top-rated';
import PopularMovies from './components/popular';
import LatestMovies from './components/latest';

const Home = () => {

    return (
        <React.Fragment>
            
            {/* Latest Movies */}
            <LatestMovies />

            {/* Upcoming Movies */}
            <UpcomingMovies />

            {/* Top Rated Movies */}
            <TopRatedMovies />

            {/* Popular Movies */}
            <PopularMovies />  

        </React.Fragment>
    )
}

export default Home;