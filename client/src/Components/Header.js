import React, {useCallback, useState } from 'react'
import Button from './Button'
import TestPanel from './TestPanel'
import TestResultsPanel from './TestResultsPanel'
import TestProductPanel from './TestProductPanel'
import DownloadPanel from './DownloadPanel'
import PublishPanel from './PublishPanel'
import PublishOptionsPanel from './PublishOptionsPanel'
import Dropdown from 'react-bootstrap/Dropdown'
import SearchBar from './SearchBar'
import axios from "axios";


const Header = (props) => {
	const [gettingReport, setGettingReport] = useState(false)
	const getReport = useCallback(async () => {
		// don't send again while we are sending
		if (gettingReport) return;
		
		// update state
		setGettingReport(true);
		
		// Send request to backend
		const promise = await axios.get("http://localhost:5000/report");
		const status = promise.status;
		if(status===200)
		{
			console.log(promise.data);
			const element = document.createElement("a");
   			const file = new Blob([promise.data],    
               {type: "data:text/csv;charset=utf-8"});
			element.href = URL.createObjectURL(file);
			element.download = "report.csv";
			document.body.appendChild(element);
			element.click();
		}
		
		// once the request is sent, update state again
		setGettingReport(false);
	  }, [gettingReport]) // update the callback if the state changes
	return (
		<header className='header'>
			<div class="header-left">FYDP</div>
	      	<div class="header-right">
	      		<div id="headerButtons">

	      			{/* <Button onClick={() => props.showDownloadPanel(true)} text={"Download Report"} color={"var(--white)"} textColor={"var(--blue)"} outline={true} download={true}/> */}
	      			<Button onClick={getReport} text={"Report"} color={"var(--white)"} textColor={"var(--blue)"} outline={true} download={true}/>
	      			<Button onClick={() => props.showPanel(true)} text={"Test Product"} color={"var(--white)"} textColor={"var(--blue)"}/>
	      			<Button onClick={() => props.showPublishPanel(true)} text={"Publish"} color={"var(--blue)"} textColor={"White"}/>

	      		</div>
	      		<DownloadPanel isPanelOpen={props.isDownloadPanelOpen} showPanel={props.showDownloadPanel} getReport={props.getReport}/>
	      		<TestProductPanel isPanelOpen={props.isPanelOpen} showPanel={props.showPanel} showResults={props.showResultsPanel} />
	      		<TestResultsPanel isPanelOpen={props.isResultsPanelOpen} showPanel={props.showResultsPanel} showTest={props.showPanel} />
	      		<PublishPanel isPanelOpen={props.isPublishPanelOpen} showPanel={props.showPublishPanel} showPublishOptions={props.showPublishOptions} />
	      		<PublishOptionsPanel isPanelOpen={props.isPublishOptionsPanelOpen} showPanel={props.showPublishOptions} products={props.products} />
	     	 </div>

	     	 <SearchBar input={props.input} onChange={props.onChange}/>

		</header>
	)
}

Header.defaultProps = {
	title: 'Default Task Tracker'
}

export default Header
