import React from 'react';
import Button from './Button'


const FactPanel = (props) => {
	return (
		<div className='container-list-item-border' style={{backgroundColor: props.background, color: props.textColor, padding: "20px", "text-align": "center"}}>
			<h3 style={{"padding-bottom": "20px"}}>{props.title}</h3>
			<p style={{"padding-bottom": "20px"}}>{props.text}</p>
			<p style={{"text-decoration": "underline"}}>{props.sourceLink}</p>
		</div>
	)
}

FactPanel.defaultProps = {
	title: "FACT OF THE DAY",
	text: "default text",
	background: "var(--factColor)",
	textColor: "var(--white)",
	sourceLink: "Read source article"
}

export default FactPanel