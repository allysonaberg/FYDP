import React from 'react';
import Button from './Button'
import img1 from '../Assets/ranking_1.png'
import img2 from '../Assets/ranking_2.png'

const rankingColors = {"A":"var(--rankGreen)", "B":"var(--rankYellow)", "C":"var(--rankGrey)", "D":"var(--rankRed)"}

const ProductInfoPanel = (props) => {
	return (
		<div className='container' style={{backgroundColor: props.background}}>
			<p style={{color: "var(--textGrey)", "font-weight": "Bold"}}>{props.title}</p>
			<p style={{color: "var(--textGrey)", "margin-bottom": "20px"}}>{props.text}</p>
			<img style={{"margin-bottom": "10px", "max-width": "100%"}} src={img1}/>
			<p id="infoText"><span style={{"color":"var(--rankGreen)", "font-weight": "Bold", "padding-right": "10px"}}>RANK A</span>emits -10% or less than avg</p>
			<p id="infoText"><span style={{"color":"var(--rankYellow)", "font-weight": "Bold", "padding-right": "10px"}}>RANK B</span>emits between -10% and +5% of the avg</p>
			<p id="infoText"><span style={{"color":"var(--rankGrey)", "font-weight": "Bold", "padding-right": "10px"}}>RANK C</span>emits between +5% and +25% of the av</p>
			<p id="infoText"><span style={{"color":"var(--rankRed)", "font-weight": "Bold", "padding-right": "10px"}}>RANK D</span>emits +25% or more than avg</p>
		</div>
	)
}

ProductInfoPanel.defaultProps = {
	title: "RANKINGS",
	text: "Carbon performance rankings are based on the average carbon footprint of the clothing category.",
	background: "var(--white)"
}

export default ProductInfoPanel