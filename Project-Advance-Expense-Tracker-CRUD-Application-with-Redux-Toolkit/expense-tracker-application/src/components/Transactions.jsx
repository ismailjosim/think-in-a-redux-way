import React from 'react';
import editImage from '../assets/edit.svg'
import deleteImage from '../assets/delete.svg'

const Transactions = () => {
    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul>
                    <li className="transaction income">
                        <p>Earned this month</p>
                        <div className="right">
                            <p>৳ 100</p>
                            <button className="link">
                                <img alt='' className="icon" src={ editImage } />
                            </button>
                            <button className="link">
                                <img alt='' className="icon" src={ deleteImage } />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Transactions;
