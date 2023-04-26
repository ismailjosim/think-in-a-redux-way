import React from 'react';

import Videos from '../components/Home/Videos';
import Pagination from '../components/Home/Pagination';
import Tags from '../components/Home/Tags';



const Home = () => {

    return (
        <>
            <Tags />
            <Videos />
            <Pagination />
        </>
    );
};

export default Home;
