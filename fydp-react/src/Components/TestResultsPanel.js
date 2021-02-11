import React from 'react';
import Button from './Button'
import Modal from './Modal'

const TestResultsPanel = (props) => {
	return ( 
		<div>
			<Modal style={{"background-color" : "black !important"}} show={props.isPanelOpen} close={() => props.showPanel(false)}>
			</Modal>
		</div>
	)
}

TestResultsPanel.defaultProps = {
	background: "var(--white)"
}

export default TestResultsPanel