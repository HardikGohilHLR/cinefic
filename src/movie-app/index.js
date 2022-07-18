// Movie app

import React, { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './home';
const SingleMovie = lazy(() => import('./single-movie'));

const MovieApp = () => {
    return (
        <React.Fragment>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<SingleMovie />} />
            </Routes>

        </React.Fragment>
    )
}

export default MovieApp;