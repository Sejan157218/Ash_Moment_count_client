import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import ShowReviews from '../../ShowReviews/ShowReviews';
import Banner from '../Banner/Banner';
import CollectionHome from '../CollectionHome/CollectionHome';
import DiscoverCollection from '../DiscoverCollection/DiscoverCollection';
import WatchCollectionsHome from '../WatchCollectionsHome/WatchCollectionsHome';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <CollectionHome></CollectionHome>
            <WatchCollectionsHome />
            <ShowReviews></ShowReviews>
            <DiscoverCollection/>
            <Footer />
        </div>
    );
};

export default Home;