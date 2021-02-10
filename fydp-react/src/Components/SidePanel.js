import React from 'react';
import Button from './Button'
import RatingPanel from './RatingPanel'
import ProductInfoPanel from './ProductInfoPanel'
import FactPanel from './FactPanel'


const SidePanel = (props) => {
	return (
		<div className='container' id="SidePanel" style={{backgroundColor: props.background}}>
			<ProductInfoPanel product={props.product}/>
		</div>
	)
}

SidePanel.defaultProps = {
	background: "var(--grey)"
}

export default SidePanel