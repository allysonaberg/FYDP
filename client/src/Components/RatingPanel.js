import React from 'react';
import Button from './Button'
import img1 from '../Assets/ranking_1.png'
import img2 from '../Assets/ranking_2.png'
import uhoh from '../Assets/uhoh.png'

const rankingColors = {0:"var(--rankGreen)", 1:"var(--rankYellow)", 2:"var(--rankGrey)", 3:"var(--rankRed)"}

const RatingPanel = (props) => {
	return (
		<div className='container' style={{backgroundColor: props.background, "boxShadow": "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px"}}>
			<p style={{color: "var(--textGrey)", "font-weight": "Bold"}}>{props.title}</p>
			<p id="infoHeading">{props.text}</p>
			<img style={{"paddingBottom": "20px", "paddingTop": "20px", "maxWidth": "120%"}} src={img1}/>
			<p id="infoINFO"><span id="infoText" style={{"color":"var(--rankGreen)"}}>RANK A</span>emits -10% or less than avg</p>
			<p id="infoINFO"><span id="infoText" style={{"color":"var(--rankYellow)"}}>RANK B</span>emits between -10% and +5% of the avg</p>
			<p id="infoINFO"><span id="infoText" style={{"color":"var(--rankGrey)"}}>RANK C</span>emits between +5% and +25% of the av</p>
			<p id="infoINFO"><span id="infoText" style={{"color":"var(--rankRed)"}}>RANK D</span>emits +25% or more than avg</p>
			<div style={{"backgroundColor": "#F0F9FF", "margin-top": "20px"}}>
				<p style={{"color": "#6583FE", "font-weight": "bold", "paddingBottom": "15px", "padding": "10px"}}><img src={uhoh} style={{"padding-right": "10px"}}/>About Our Calculations</p>
				<p style={{"padding": "10px", "paddingTop": "5px"}}>Lorem ipsum dolor sit amet, consectetur adipise elit. Curabitur sed tincidunt erat. Maecenas quis dui risus. Vivamus mattis volutpat enim ac sagittis </p>
			</div>
		</div>
	)
}

RatingPanel.defaultProps = {
	title: "RANKINGS",
	text: "Carbon performance rankings are based on the average carbon footprint of the clothing category.",
	background: "var(--white)"
}

export default RatingPanel