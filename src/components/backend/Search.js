'use client'
import React from 'react';

const Search = ({ query, handleChange }) => {
    return (
        <form className="form-inline search-form search-box">
            <div className="form-group">
                <input
                    className="form-control-plaintext"
                    type="search"
                    placeholder="Search by title..."
                    value={query}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default Search;
