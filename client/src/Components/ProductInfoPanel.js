import React from 'react';
import Button from './Button'
import tip from '../Assets/tip.png'
import ShowMoreText from 'react-show-more-text';

//TODO:
//need tip thingy
const ProductInfoPanel = (props) => {
	console.log("INFOPANNEL")
	console.log(props);
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<div className='container-right' style={{"marginTop": "10px", "paddingTop": "0px"}}>
				<button onClick={() => props.removePanel()} style={{"backgroundColor": "var(--white)", "border": "none", "color": "(--var(grey)"}}>X</button>
			</div>

			<h3 style={{"marginTop": "10px"}}>{props.product.name}</h3>

			<div class='container' style={{"padding-left": "0px", "paddingTop": "2em", "paddingBottom": "1em", "paddingRight": "0px", "margin-right": "0px", }}>
				<p style={{"color": "var(--textGrey)", "fontWeight": "bold"}}>MATERIAL BREAKDOWN</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				{props.product.materials.map(material=><p class="productInfoText">
					<div class="container" style={{"padding": "0px", "fontSize": "17px"}}>
						<div class="container-left" style={{"paddingTop": "0px", "padding-left": "0px", "paddingBottom": "0px"}}>
							{material.ratio * 100 + "%"}
						</div>
						<div class="container-left" style={{"paddingTop": "0px", "paddingBottom": "0px"}}>
							{material.name.charAt(0).toUpperCase() + material.name.slice(1)}
						</div>
						<div class="container-right" style={{"paddingTop": "0px", "paddingBottom": "0px"}}>
							{material.kg_carbon} kg CO<sub>2</sub>
						</div>
					</div>
				</p>)}
				<div class="container" style={{"paddingTop": "20px"}}>
					<img src={tip}/>
				</div>
			</div>

			<div className='container' style={{"padding-left": "0px", "paddingBottom": "2em"}}>
				<p style={{"color": "var(--textGrey)", "fontWeight": "bold"}}>ANALYSIS</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				{props.product.analyses.map(analysis=>
					<p class="productInfoText">
					<ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass='my-anchor-css-class'
                expanded={false}
                
            >{analysis}</ShowMoreText>
			</p>
				)}
			</div>

			<div className='container' style={{"padding-left": "0px"}}>
				<p style={{"color": "var(--textGrey)", "fontWeight": "bold"}}>SUGGESTIONS</p>
				<hr style={{"color": "var(--textGrey)"}}/>
				{props.product.suggestions.map(suggestion=><p class="productInfoText">
					{suggestion}</p>)}
			</div>
		</div>
	)
}

ProductInfoPanel.defaultProps = {
	background: "var(--white)"
}

export default ProductInfoPanel