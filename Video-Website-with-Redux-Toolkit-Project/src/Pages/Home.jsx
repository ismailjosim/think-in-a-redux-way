import React from 'react';
import Tags from '../components/Tags/Tags';
import Videos from '../components/Videos/Videos';
import Pagination from '../components/Pagination/Pagination';

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
