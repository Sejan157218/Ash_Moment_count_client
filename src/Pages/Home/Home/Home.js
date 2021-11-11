import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import ShowReviews from '../../ShowReviews/ShowReviews';
import WatchCollectionsHome from '../WatchCollectionsHome/WatchCollectionsHome';

const Home = () => {
    return (
        <div>
            <Header />
            <WatchCollectionsHome />
            <ShowReviews></ShowReviews>
            <Footer />
        </div>
    );
};

export default Home;