import React from "react";
import './styles/search.scss'
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text"  placeholder="search" />
      </div>
      <div className="userSearch">
        <img src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <span>Abdelaziz kazoum</span>
      </div>
    </div>
  );
};

export default Search;
