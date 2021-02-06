import React from 'react';

const Button = (props) => {
	return (
		<button onClick={props.onClick} style={{backgroundColor: props.color, color: props.textColor}} className='btn'>{props.text}</button>
	)
}

Button.defaultProps = {
	color: 'White',
	textColor: 'Black',
	text: 'Default'
}

export default Button