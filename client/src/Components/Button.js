import React from 'react';
import download from '../Assets/download.png'

const Button = (props) => {

	const rankingColors = {"A":"var(--rankGreen)", "B":"var(--rankYellow)", "C":"var(--rankGrey)", "D":"var(--rankRed)"}
	const text = props.rankButton ? "RANK " + props.text : props.text
	const color = props.rankButton ? rankingColors[props.text] : props.color
	const textColor = props.rankButton ? "var(--white)" : props.textColor
	const fontSize = props.size 
	const image = props.download ? download : ""

	return (
		props.center ? <button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: props.outline ? "1px solid var(--blue)" : "none", "fontSize": fontSize, "margin": "0 auto", "display": "block", "width": "100%"}} className='btn'>{text}</button> 
		:
		<button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: props.outline ? "1px solid var(--grey)" : "none", "fontSize": fontSize}} className='btn'>{text}</button>
	)
}

Button.defaultProps = {
	color: 'White',
	textColor: 'Black',
	text: 'Default',
	rankButton: false,
	outline: true,
	center: false,
	height: '100%',
	size: '18px',
	download: false
}

export default Button