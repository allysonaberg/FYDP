import React from 'react';
import Button from './Button'
import shirt from '../Assets/shirt.png'


const Product = (props) => {
	const image = "data:image/png;base64, " + props.image;
	return (
		<button onClick={() => props.onToggle(props.id)} className='container-list-item' style={{backgroundColor: props.background, "border": "none", "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"}}>

			<div className="container-left">
				<img src={image}/>
			</div>
 
			<div className="container">
				<h3 style={{"paddingTop": "10px", "paddingBottom": "10px"}}>{props.name}</h3>
				<p class="light" style={{"paddingTop": "5px", "paddingBottom": "2px"}}>Carbon Performance</p>
				<p style={{"paddingBottom": "20px"}}>{props.kg_carbon} kg CO2 emitted per item</p>
				<Button text={props.rank} rankButton={true} outline={false}/>
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