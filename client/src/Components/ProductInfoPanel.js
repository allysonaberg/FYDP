import React from 'react';
import Button from './Button'
import tip from '../Assets/tip.png'

//TODO:
//need gc02 of each material (in props.product.materials)
//need tip thingy
const ProductInfoPanel = (props) => {
	console.log(props)
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<div className='container-right' style={{"margin-top": "10px", "paddingTop": "0px"}}>
				<button onClick={() => props.removePanel()} style={{"background-color": "var(--white)", "border": "none", "color": "(--var(grey)"}}>X</button>
			</div>

			<h3 style={{"margin-top": "10px"}}>{props.product.name}</h3>

			<div class='container' style={{"padding-left": "0px", "paddingTop": "2em", "paddingBottom": "1em", "padding-right": "0px", "margin-right": "0px", }}>
				<p style={{"color": "var(--textGrey)", "font-weight": "bold"}}>MATERIAL BREAKDOWN</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				{props.product.materials.map(material=><p id = "productInfoText">
					<div class="container" style={{"padding": "0px", "font-size": "17px"}}>
						<div class="container-left" style={{"padding-top": "0px", "padding-left": "0px", "padding-bottom": "0px"}}>
							{material.split("%")[0] + "%"}
						</div>
						<div class="container-left" style={{"padding-top": "0px", "padding-bottom": "0px"}}>
							{material.split("%")[1]}
						</div>
						<div class="container-right" style={{"padding-top": "0px", "padding-bottom": "0px"}}>
							30.6 gc0<sub>2</sub>
						</div>
					</div>
				</p>)}
				<div class="container" style={{"padding-top": "20px"}}>
					<img src={tip}/>
				</div>
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