import React from 'react';
import editImage from '../assets/edit.svg'
import deleteImage from '../assets/delete.svg'


const SingleTransaction = ({ item }) => {
    const { name, amount, type } = item || {}
    return (
        <li className={ `transaction ${ type }` }>
            <p>{ name }</p>
            <div className="right">
                <p>৳ { amount }</p>
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
