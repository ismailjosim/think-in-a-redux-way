import React from 'react';
import editImage from '../assets/edit.svg'
import deleteImage from '../assets/delete.svg'
import { useDispatch } from 'react-redux';
import { editActive, removeTransaction } from '../Redux/features/transaction/transactionSlice';


const SingleTransaction = ({ item }) => {
    const { id, name, amount, type } = item || {};
    const dispatch = useDispatch();



    const handleEdit = () => {
        dispatch(editActive(item))
    }

    const handleDelete = () => {
        dispatch(removeTransaction(id))
    }


    return (
        <li className={ `transaction ${ type }` }>
            <p>{ name }</p>
            <div className="right">
                <p>৳ { amount }</p>
                <button onClick={ handleEdit } className="link">
                    <img alt='' className="icon" src={ editImage } />
                </button>
                <button onClick={ handleDelete } className="link">
                    <img alt='' className="icon" src={ deleteImage } />
                </button>
            </div>
        </li>
    );
};

export default SingleTransaction;
