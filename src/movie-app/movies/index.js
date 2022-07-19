// Movie app - All Movies
import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

// Pages
const AllMovies = lazy(() => import('./all-movies'));

const Movies = () => {

    return (
        <React.Fragment>
            <Suspense fallback={<div className="fb_preloader"><img src="/images/preloader.svg" alt="Loading..." /></div>}>
                <Routes>
                    <Route path={`/now-playing`} element={<AllMovies movies="now_playing" />} />
                    <Route path={`/popular`} element={<AllMovies movies="popular" />} />
                    <Route path={`/upcoming`} element={<AllMovies movies="upcoming" />} />
                    <Route path={`/top-rated`} element={<AllMovies movies="top_rated" />} />
                </Routes>
            </Suspense>

        </React.Fragment>
    )
}

export default Movies;