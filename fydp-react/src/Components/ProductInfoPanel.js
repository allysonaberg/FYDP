import React from 'react';
import Button from './Button'

const ProductInfoPanel = (props) => {
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<div className='container-right' style={{"margin-top": "0px", "padding-top": "0px"}}>
				<button onClick={() => props.removePanel()} style={{"background-color": "var(--white)", "border": "none"}}>X</button>
			</div>
			<h3 style={{"font-weight": "bold"}}>{props.product.name}</h3>

			<div className='container' style={{"padding-left": "0px"}}>
				<p style={{"color": "var(--textGrey)", "font-weight": "bold"}}>MATERIAL BREAKDOWN</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				<p id = "productInfoText">{props.product.material1}</p>
				<p id="productInfoText">{props.product.material2}</p>
			</div>

			<div className='container' style={{"padding-left": "0px"}}>
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