import React from 'react';
import Button from './Button'

const ProductInfoPanel = (props) => {
	
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<div className='container-right' style={{"margin-top": "0px", "paddingTop": "0px"}}>
				<button onClick={() => props.removePanel()} style={{"backgroundColor": "var(--white)", "border": "none"}}>X</button>
			</div>

			<h3>{props.product.name}</h3>

			<div className='container' style={{"padding-left": "0px", "paddingTop": "2em", "paddingBottom": "2em"}}>
				<p style={{"color": "var(--textGrey)", "font-weight": "bold"}}>MATERIAL BREAKDOWN</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				{props.product.materials.map(material=><p id = "productInfoText">{material}</p>)}
			</div>

			<div className='container' style={{"padding-left": "0px", "paddingBottom": "2em"}}>
				<p style={{"color": "var(--textGrey)", "font-weight": "bold"}}>ANALYSIS</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				<p id="productInfoText">{props.product.analysis}</p>
			</div>

			<div className='container' style={{"padding-left": "0px"}}>
				<p style={{"color": "var(--textGrey)", "font-weight": "bold"}}>SUGGESTIONS</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				<p id="productInfoText">{props.product.suggestion}</p>
			</div>
		</div>
	)
}

ProductInfoPanel.defaultProps = {
	background: "var(--white)"
}

export default ProductInfoPanel