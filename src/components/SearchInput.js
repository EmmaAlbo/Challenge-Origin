import React from 'react';

export const SearchInput = ({ search, handlerSearch, searchInput }) => {
  return (
    <div className="has-search col">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        ref={searchInput}
        value={search}
        onChange={handlerSearch}
      />
    </div>
  );
};
