// Home
import React from 'react';
import '@/styles/index.scss';

import axios from '@/app/api/axios';
import Banner from '@/components/banner';
import UpcomingMovies from '@/components/movies/upcoming';

const useMovies = async () => {
    const response = await axios.get('movie/now_playing');
    const data = await response?.data?.results;	
    return data;
}

const Home = async () => {
	const latestReleases = await useMovies();

	return (
		<>

			{/* Banner */}
			<Banner movies={latestReleases} />

			{/* Upcoming Movies */}
			<UpcomingMovies />

		</>
	)
}

export default Home