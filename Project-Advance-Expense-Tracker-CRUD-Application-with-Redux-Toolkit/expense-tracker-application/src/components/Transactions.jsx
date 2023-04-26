import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../Redux/features/transaction/transactionSlice';
import SingleTransaction from './SingleTransaction';

const Transactions = () => {

    const dispatch = useDispatch();
    const { transactions, isLoading, isError, error } = useSelector(state => state.transaction);

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [dispatch])


    // Section: Decide What to render
    let content;

    if (isLoading) content = <h3>Loading...</h3>

    if (!isLoading && isError) content = <div className="col-span-12 text-center">{ error }</div>

    if (!isLoading && !isError && transactions?.length === 0) content = <p>No transaction Found!</p>

    if (!isLoading && !isError && transactions?.length > 0) content = transactions.map((item, index) => <SingleTransaction key={ index } item={ item }></SingleTransaction>)




    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul>
                    { content }
                </ul>
            </div>
        </>
    );
};

export default Transactions;
