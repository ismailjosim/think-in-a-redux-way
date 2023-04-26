import React from 'react';
import editImage from '../assets/edit.svg'
import deleteImage from '../assets/delete.svg'
import { useDispatch } from 'react-redux';
import { editActive } from '../Redux/features/transaction/transactionSlice';


const SingleTransaction = ({ item }) => {
    const { name, amount, type } = item || {};
    const dispatch = useDispatch();



    const handleEdit = () => {
        dispatch(editActive(item))
    }


    return (
        <li className={ `transaction ${ type }` }>
            <p>{ name }</p>
            <div className="right">
                <p>৳ { amount }</p>
                <button onClick={ handleEdit } className="link">
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
