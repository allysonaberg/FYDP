import React from 'react';
import Button from './Button'
import shirt from '../Assets/shirt.png'


const Product = (props) => {
	return (
		<button onClick={() => props.onToggle(props.id)} className='container-list-item' style={{backgroundColor: props.background, "border": "none", "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"}}>

			<div className="container-left" style={{"padding-top": "0px", "padding-bottom": "0px", "padding-left": "0px"}}>
				<img src={shirt}/>
			</div>
 
			<div className="container">
				<h3 style={{"padding-top": "10px", "padding-bottom": "10px"}}>{props.name}</h3>
				<p class="light" style={{"padding-top": "5px", "padding-bottom": "2px"}}>Carbon Performance</p>
				<p style={{"padding-bottom": "20px"}}>{props.carbon} gCO2 emitted per item</p>
				<Button text={props.rank} rankButton={true} outline={false}/>
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