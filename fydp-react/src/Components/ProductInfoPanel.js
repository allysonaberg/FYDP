import React from 'react';
import Button from './Button'
import img1 from '../Assets/ranking_1.png'
import img2 from '../Assets/ranking_2.png'

const ProductInfoPanel = (props) => {
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<p style={{color: "var(--textGrey)", "font-weight": "Bold"}}>{props.title}</p>
			<p style={{color: "var(--textGrey)", "margin-bottom": "20px"}}>{props.text}</p>
			<img style={{"margin-bottom": "10px"}} src={img1}/>
			<img style={{"margin-bottom": "10px"}} src={img2}/>
		</div>
	)
}

ProductInfoPanel.defaultProps = {
	title: "RANKINGS",
	text: "Carbon performance rankings are based on the average carbon footprint of the clothing category.",
	background: "var(--white)"
}

export default ProductInfoPanel