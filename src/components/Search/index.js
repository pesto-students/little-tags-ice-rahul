import React from 'react';
import { ReactComponent as SearchIcon } from '../../global/assets/icons/icon-search.svg';
import './Search.scss';

const Search = () => {
  return (
    <div className="Search">
      <SearchIcon stroke="#ccc" className="searchIcon" />
      <input type="text" name="searchProducts" placeholder="Search Products ..." className="searchInput" />
    </div>
  );
}

export default Search;