import React from 'react';
import Button from './Button'

const Header = (props) => {
	return (
		<header className='header'>
			<div class="header-left">FYDP</div>
	      	<div class="header-right">
	      		<Button text={"Download Report"} color={"var(--white)"} textColor={"var(--blue)"} outline={true}/>
	      		<Button text={"Test Product"} color={"var(--blue)"} textColor={"White"}/>
	     	 </div>
	      	<form class="header-search">
	      		<input type="text" id="searchBar" name="search" value="Search item"></input>
	      		<Button text={"search"}type="submit" style={{"float": "right"}} >SEARCH</Button>
	      	</form>
		</header>
	)
}

Header.defaultProps = {
	title: 'Default Task Tracker'
}

export default Header