import React from 'react';
import download from '../Assets/download.png'

const Button = (props) => {

	const rankingColors = {0:"var(--rankGreen)", 1:"var(--rankYellow)", 2:"var(--rankGrey)", 3:"var(--rankRed)"}
	const text = props.rankButton ? "RANK " + props.text : props.text
	const color = props.rankButton ? rankingColors[props.text] : props.color
	const textColor = props.rankButton ? "var(--white)" : props.textColor
	const fontSize = props.size 
	const image = props.download ? download : ""

	return (
		props.center ? <button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: props.outline ? "1px solid var(--grey)" : "none", "font-size": fontSize, "margin": "0 auto", "display": "block"}} className='btn'>{text}</button> 
		:
		<button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: props.outline ? "1px solid var(--grey)" : "none", "font-size": fontSize}} className='btn'><img src={image} style={{"margin-right": "5px"}}/>{text}</button>
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