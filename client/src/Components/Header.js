import React from 'react';
import Button from './Button'
import TestPanel from './TestPanel'
import TestResultsPanel from './TestResultsPanel'
import TestProductPanel from './TestProductPanel'
import Dropdown from 'react-bootstrap/Dropdown'
import SearchBar from './SearchBar'


const Header = (props) => {
	return (
		<header className='header'>
			<div class="header-left">FYDP</div>
	      	<div class="header-right">
	      		<div id="headerButtons">
	      			<Button text={"Report"} color={"var(--white)"} textColor={"var(--blue)"} outline={true} download={true}/>
	      			<Button onClick={() => props.showPanel(true)} text={"Test Product"} color={"var(--white)"} textColor={"var(--blue)"}/>
	      			<Button text={"Publish"} color={"var(--blue)"} textColor={"White"}/>

	      		</div>
	      		<TestProductPanel isPanelOpen={props.isPanelOpen} showPanel={props.showPanel} showResults={props.showResultsPanel} />
	      		<TestResultsPanel isPanelOpen={props.isResultsPanelOpen} showPanel={props.showResultsPanel} showTest={props.showPanel} />
	     	 </div>

	     	 <SearchBar input={props.input} onChange={props.onChange}/>

		</header>
	)
}

Header.defaultProps = {
	title: 'Default Task Tracker'
}

export default Header
