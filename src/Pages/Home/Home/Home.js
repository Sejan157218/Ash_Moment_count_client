import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import WatchCollectionsHome from '../WatchCollectionsHome/WatchCollectionsHome';

const Home = () => {
    return (
        <div>
            <Header />
            <WatchCollectionsHome />
            <Footer />
        </div>
    );
};

export default Home;