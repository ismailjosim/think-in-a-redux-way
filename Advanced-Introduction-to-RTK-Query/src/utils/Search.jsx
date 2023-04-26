import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../redux/features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const { Search } = useSelector(state => state.filter);
    const [input, setInput] = useState(Search);


    // know the user current location
    const match = useMatch('/');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searched(input));
        // if user is not in the homepage, redirect to the homepage.
        if (!match) {
            navigate('/')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={ input }
                onChange={ (e) => setInput(e.target.value) }
            />
        </form>
    );
};

export default Search;
