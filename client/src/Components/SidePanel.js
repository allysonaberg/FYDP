import React from 'react';
import Button from './Button'
import RatingPanel from './RatingPanel'
import ProductInfoPanel from './ProductInfoPanel'
import FactPanel from './FactPanel'


const SidePanel = (props) => {
	const visibility = props.showInfoPanel ? "visible" : "hidden"
	const productInfoHeight = props.showInfoPanel ? "0%" : "100%"
	return (
		<div className='container' id="SidePanel" style={{backgroundColor: props.background }}>
			<div className="container" id="collapsableContainer" style={{"boxShadow": "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px", "padding": "0px"}}>
				<ProductInfoPanel product={props.product} removePanel={props.removePanel}/>
			</div>
			<div className="container" style={{"visible": "{!props.showInfoPanel}", "padding": "0px"}}>
				<FactPanel />
				<RatingPanel />
			</div>
		</div>
	)
}

SidePanel.defaultProps = {
	background: "var(--grey)"
}

export default SidePanel