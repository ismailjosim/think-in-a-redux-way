import React from 'react';
import TopCard from '../components/TopCard';
import Form from '../components/Form';
import Transactions from '../components/Transactions';

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <TopCard />
                <Form />
                <Transactions />
            </div>
        </div>
    );
};

export default Main;
