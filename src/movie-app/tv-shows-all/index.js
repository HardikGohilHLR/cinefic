// Movie app - All Shows
import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

// Pages
const TVShowsList = lazy(() => import('./tv-shows-all'));

const TVShowsAll = () => {

    return (
        <React.Fragment>
            <Suspense fallback={<div className="fb_preloader"><img src="/images/preloader.svg" alt="Loading..." /></div>}>
                <Routes>
                    <Route path={`/airing-today`} element={<TVShowsList movies="airing_today" />} />
                    <Route path={`/on-air`} element={<TVShowsList movies="on_the_air" />} />
                    <Route path={`/top-rated`} element={<TVShowsList movies="top_rated" />} />
                    <Route path={`/popular`} element={<TVShowsList movies="popular" />} />
                </Routes>
            </Suspense>

        </React.Fragment>
    )
}

export default TVShowsAll;