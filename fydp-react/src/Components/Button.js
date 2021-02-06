import React from 'react';

const Button = (props) => {
	return (
		<button onClick={props.onClick} className='btn'>{props.text}</button>
	)
}

Button.defaultProps = {
	text: 'Default'
}

export default Button