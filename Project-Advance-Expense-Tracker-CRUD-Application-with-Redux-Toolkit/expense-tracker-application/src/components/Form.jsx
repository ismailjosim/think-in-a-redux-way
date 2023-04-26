import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction, updateTransaction } from '../Redux/features/transaction/transactionSlice';

const Form = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector(state => state.transaction);

    const { editing } = useSelector(state => state.transaction) || {};



    // listen form edit mode active
    useEffect(() => {
        const { id, name, amount, type } = editing || {};
        if (id) {
            setEditMode(true)
            setName(name)
            setType(type)
            setAmount(amount)
        } else {
            setEditMode(false)
            formReset()
        }

    }, [editing])



    // Form reset function
    const formReset = () => {
        setName("")
        setType("")
        setAmount("")
    }

    // transaction handle function
    const handleTransaction = e => {
        e.preventDefault();
        dispatch(createTransaction({ name, type, amount: Number(amount) }));
        formReset();

    }

    // handle update
    const handleUpdate = e => {
        e.preventDefault();
        dispatch(updateTransaction(
            {
                id: editing?.id,
                data: { name, type, amount: Number(amount) }
            }
        ));
        formReset();
    }
    // Transaction Edit cancel
    const cancelEditMode = () => {
        formReset();
        setEditMode(false);

    }


    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form onSubmit={ editMode ? handleUpdate : handleTransaction }>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Transaction Name"
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </div>

                <div className="form-group radio">
                    <label htmlFor="transaction_type">Type</label>
                    <div className="radio_group">
                        <input
                            required
                            type="radio"
                            value="income"
                            name="type"
                            checked={ type === 'income' }
                            onChange={ e => setType('income') }
                        />
                        <label htmlFor="transaction_type">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={ type === 'expense' }
                            onChange={ e => setType('expense') }


                        />
                        <label htmlFor="transaction_type">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        required
                        placeholder="Enter Amount"
                        name="amount"
                        value={ amount }
                        onChange={ e => setAmount(e.target.value) }
                    />
                </div>

                <button
                    disabled={ isLoading }
                    type='submit'
                    className="btn">
                    { editMode ? "Update Transaction" : "Add Transaction" }
                </button>
                { !isLoading && isError && <p className='error'>There is an error!</p> }

                { editMode && (<button onClick={ cancelEditMode } className="btn cancel_edit">Cancel Edit</button>) }
            </form>
        </div>
    );
};

export default Form;
