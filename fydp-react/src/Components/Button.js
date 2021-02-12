import React from 'react';

const Button = (props) => {

	const rankingColors = {"A":"var(--rankGreen)", "B":"var(--rankYellow)", "C":"var(--rankGrey)", "D":"var(--rankRed)"}
	const text = props.rankButton ? "RANK " + props.text : props.text
	const color = props.rankButton ? rankingColors[props.text] : props.color
	const textColor = props.rankButton ? "var(--white)" : props.textColor

	return (
		props.center ? <button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: props.outline ? "1px solid var(--grey)" : "none", "margin": "0 auto", "display": "block", "width": "100%"}} className='btn'>{text}</button> 
		:
		<button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: props.outline ? "1px solid var(--grey)" : "none"}} className='btn'>{text}</button>
	)
}

Button.defaultProps = {
	color: 'White',
	textColor: 'Black',
	text: 'Default',
	rankButton: false,
	outline: true,
	center: false
}

export default Button