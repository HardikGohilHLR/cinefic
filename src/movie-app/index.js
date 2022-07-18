// Movie app

import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';

// Pages
import Home from './home';
const SingleMovie = lazy(() => import('./single-movie'));

const MovieApp = () => {
    return (
        <React.Fragment>

            <Layout>
                <Suspense fallback={<div>loading</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<SingleMovie />} />
                    </Routes>
                </Suspense>
            </Layout>


        </React.Fragment>
    )
}

export default MovieApp;