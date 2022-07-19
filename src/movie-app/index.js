// Movie app

import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';

// Pages
import Home from './home';
const SingleMovie = lazy(() => import('./single-movie'));
const Movies = lazy(() => import('./movies'));

const MovieApp = () => {
    return (
        <React.Fragment>

            <Layout>
                <Suspense fallback={<div className="fb_preloader"><img src="/images/preloader.svg" alt="Loading..." /></div>}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movie/:id" element={<SingleMovie />} />
                        <Route path="/movies/*" element={<Movies />} />
                    </Routes>
                </Suspense>
            </Layout>


        </React.Fragment>
    )
}

export default MovieApp;