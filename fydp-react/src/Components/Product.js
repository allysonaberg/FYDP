import React from 'react';
import Button from './Button'
import shirt from '../Assets/shirt.png'


const Product = (props) => {
	return (
		<button onClick={() => props.onToggle(props.id)} className='container-list-item' style={{backgroundColor: props.background}}>

			<div className="container-left">
				<img src={props.image}/>
			</div>

			<div className="container">
				<h3 style={{"padding-top": "10px", "padding-bottom": "10px"}}>{props.name}</h3>
				<p style={{"padding-top": "5px", "padding-bottom": "2px"}}>Carbon Performance</p>
				<p style={{"padding-bottom": "10px"}}>{props.carbon} gCO2 emitted per item</p>
				<Button text={props.rank} rankButton={true}/>
			</div>

		</button>
	)
}

Product.defaultProps = {
	name: 'Product',
	carbon: '--',
	image: shirt,
	rank: 'RANK --',
	background: "var(--white)"
}

export default Product