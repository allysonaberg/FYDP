import React from 'react';

const SearchBar = (props) => {
	return (
		<div class="header-search">
	     	 	<form class="searchBar">
	     	 		<input type="text" placeholder="Search item" value={props.input} onChange={(e) => props.onChange(e.target.value)} />
	     	 		<button type="submit">Search</button>
	     		 </form>
	     </div>
	)
}

export default SearchBar