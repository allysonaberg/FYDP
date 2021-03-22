import React from 'react';

class Auth extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("DOING AUTH")
    	this.props.function()
 	}

  render() {
    return (
		<div>
			<h3>STUFF</h3>
		</div>
    );
  }
}

export default Auth