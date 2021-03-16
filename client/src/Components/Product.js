import React from 'react';
import Button from './Button'
import shirt from '../Assets/shirt.png'
import published from '../Assets/published.png'
import not_published from '../Assets/not_published.png'

//NEED:
//per item and entire stock emissions
//published status
//RANKINGS (as letters if possible)

const Product = (props) => {
	const image = "data:image/png;base64, " + props.image;
	return (
		<button onClick={() => props.onToggle(props.id)} className='container-list-item' style={{backgroundColor: props.background, "border": "none", "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"}}>

			<div className="fill" style={{"float": "left", "margin": "auto", "padding-right": "10px"}}>
				<img src={image}/>
			</div>
 
			<div className="container">
			<div class="container" style={{"padding": "0px", "margin": "0px"}}>
				<div class="container-left" style={{"padding-left": "0px", "padding-top": "0px"}}>
					<h3 style={{"paddingTop": "10px", "paddingBottom": "10px"}}>{props.name}</h3>
				</div>
				<div class="container-right">
					<img src={published}/>
				</div>
			</div>
				<p class="light" style={{"paddingTop": "10px", "paddingBottom": "1px"}}>CARBON EMISSIONS</p>
				<div className="container-left" style={{"width": "32%", "padding-left": "0px"}}>
					<p style={{"paddingBottom": "2px", "font-size": "20px"}}>{props.kg_carbon} gC0<sub>2</sub></p>
					<p class="light" style={{"font-size": "13px"}}>Per Item</p>
				</div>
				<div className="container-left" style={{"width": "32%"}}>
					<p style={{"paddingBottom": "2px", "font-size": "20px"}}>{props.kg_carbon} gCO<sub>2</sub></p>
					<p class="light" style={{"font-size": "13px"}}>Entire Stock</p>
				</div>
				<div className="container-right">
					<Button text={props.rank} rankButton={true} outline={false} size="15px"/>
				</div>
			</div>

		</button>
	)
}

Product.defaultProps = {
	name: 'Product',
	kg_carbon: '--',
	image: shirt,
	rank: 'RANK --',
	background: "var(--white)"
}

export default Product