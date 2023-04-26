import React from 'react';
import editImage from '../assets/edit.svg'
import deleteImage from '../assets/delete.svg'


const SingleTransaction = () => {
    return (
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
    );
};

export default SingleTransaction;
