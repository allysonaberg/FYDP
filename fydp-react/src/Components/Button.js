import React from 'react';

const Button = (props) => {

	const rankingColors = {"A":"var(--rankGreen)", "B":"var(--rankYellow)", "C":"var(--rankGrey)", "D":"var(--rankRed)"}

	console.log(rankingColors[props.text])
	const text = props.rankButton ? "RANK " + props.text : props.text
	const color = props.rankButton ? rankingColors[props.text] : props.color
	const textColor = props.rankButton ? "var(--white)" : props.textColor

	return (
		<button onClick={props.onClick} style={{backgroundColor: color, color: textColor, border: "1px solid var(--grey)"}} className='btn'>{text}</button>
	)
}

Button.defaultProps = {
	color: 'White',
	textColor: 'Black',
	text: 'Default',
	rankButton: false,
	outline: false
}

export default Button