import React from 'react';
import Button from './Button'

//TODO: need actual info + source artical link
const FactPanel = (props) => {
	return (
		<div className='container-list-item-border' id="factPanel" style={{backgroundColor: props.background, color: props.textColor, "boxShadow": "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px"}}>
			<h3 style={{"paddingBottom": "20px"}}>{props.title}</h3>
			<p style={{"paddingBottom": "20px"}}>{props.factText}</p>
			<p style={{"textDecoration": "underline"}}>{props.sourceLink}</p>
		</div>
	)
}

FactPanel.defaultProps = {
	title: "FACT OF THE DAY",
	factText: "More than 70 million barrels of oil are used to make polyester each year",
	text: "default text",
	background: "var(--factColor)",
	textColor: "var(--white)",
	sourceLink: "Read source article"
}

export default FactPanel