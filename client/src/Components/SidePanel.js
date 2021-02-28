import React from 'react';
import Button from './Button'
import RatingPanel from './RatingPanel'
import ProductInfoPanel from './ProductInfoPanel'
import FactPanel from './FactPanel'


const SidePanel = (props) => {
	const visibility = props.showInfoPanel ? "visible" : "hidden"
	const productInfoHeight = props.showInfoPanel ? "0%" : "100%"
	return (
		<div className='container' id="SidePanel" style={{backgroundColor: props.background}}>
			<div className="container" id="collapsableContainer">
				<ProductInfoPanel product={props.product} removePanel={props.removePanel}/>
			</div>
			<div className="container" style={{"visible": "{!props.showInfoPanel}"}}>
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