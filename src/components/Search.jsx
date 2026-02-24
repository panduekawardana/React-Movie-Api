import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" className="text-white h-8" />
                <input
                    type="text"
                    placeholder="Search your movie here!"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
					}}>
				</input>
            </div>
        </div>
    );
};

export default Search;
