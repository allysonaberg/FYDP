import React from 'react';
import Button from './Button'
import ProductInfoPanel from './ProductInfoPanel'
import FactPanel from './FactPanel'


const SidePanel = (props) => {
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<FactPanel text={"More than 70 million barrels of oil are used to make polyester each year"} />
			<ProductInfoPanel />
		</div>
	)
}

SidePanel.defaultProps = {
	background: "var(--grey)"
}

export default SidePanel