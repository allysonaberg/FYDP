import React from 'react';
import Button from './Button'
import img1 from '../Assets/ranking_1.png'
import img2 from '../Assets/ranking_2.png'

const rankingColors = {0:"var(--rankGreen)", 1:"var(--rankYellow)", 2:"var(--rankGrey)", 3:"var(--rankRed)"}

const RatingPanel = (props) => {
	return (
		<div className='container' style={{backgroundColor: props.background, "box-shadow": "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px"}}>
			<p style={{color: "var(--textGrey)", "font-weight": "Bold"}}>{props.title}</p>
			<p id="infoHeading">{props.text}</p>
			<img style={{"marginBottom": "10px", "maxWidth": "100%"}} src={img1}/>
			<p><span id="infoText" style={{"color":"var(--rankGreen)"}}>RANK A</span>emits -10% or less than avg</p>
			<p><span id="infoText" style={{"color":"var(--rankYellow)"}}>RANK B</span>emits between -10% and +5% of the avg</p>
			<p><span id="infoText" style={{"color":"var(--rankGrey)"}}>RANK C</span>emits between +5% and +25% of the av</p>
			<p><span id="infoText" style={{"color":"var(--rankRed)"}}>RANK D</span>emits +25% or more than avg</p>
		</div>
	)
}

RatingPanel.defaultProps = {
	title: "RANKINGS",
	text: "Carbon performance rankings are based on the average carbon footprint of the clothing category.",
	background: "var(--white)"
}

export default RatingPanel