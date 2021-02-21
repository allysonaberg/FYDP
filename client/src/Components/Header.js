import React from 'react';
import Button from './Button'
import TestPanel from './TestPanel'
import TestResultsPanel from './TestResultsPanel'
import Dropdown from 'react-bootstrap/Dropdown'


const Header = (props) => {
	console.log("PROPS HEADER");
	console.log(props);
	return (
		<header className='header'>
			<div class="header-left">FYDP</div>
	      	<div class="header-right">
	      		<Button text={"Download Report"} color={"var(--white)"} textColor={"var(--blue)"} outline={true}/>
	      		<Button onClick={() => props.showPanel(true)} text={"Test Product"} color={"var(--blue)"} textColor={"White"}/>
	      		<TestPanel isPanelOpen={props.isPanelOpen} showPanel={props.showPanel} showResults={props.showResultsPanel} />
	      		<TestResultsPanel isPanelOpen={props.isResultsPanelOpen} showPanel={props.showResultsPanel} showTest={props.showPanel} />
	     	 </div>

	     	 <div class="header-search">
	     	 	<form class="searchBar">
	     	 		<input type="text" placeholder="Search item" />
	     	 		<button type="submit">Search</button>
	     		 </form>
	     	 </div>

		</header>
	)
}

Header.defaultProps = {
	title: 'Default Task Tracker'
}

export default Header
