import React from 'react';
import Button from './Button'
import Modal from './Modal'
import FibreField from './FibreField'

class TestPanel extends React.Component {

	constructor(props) {
		super(props);
		this.state = { values: [{name: "val1", percentage: "5%"}] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	createUI() {
		console.log(this.props.showResults)
		console.log(this.state.values)
		return this.state.values.map((value, i) => 
			<div key={i} style={{"margin": "0px"}}>
				<div class="container-left" style={{"width": "60%", "padding-left": "0px", "paddingRight": "0px", "margin": "0px", "paddingTop": "0px"}}>
					<div class="dropdown">
		 			 	<input class="dropbtn" type="text" value={value.name} onChange={this.handleChange.bind(this, i)}/>
		  			</div>
		  		</div>

		  		<div class="container" style={{"padding-left": "20px", "paddingTop": "0px", "margin-top": "0px", "marginBottom": "0px"}}>
	  				<div class="container-left" style={{"maxWidth": "70%"}}>
						<div class="dropdown" style={{"paddingTop": "0px"}}>
							<input class="dropbtn" type="text" value={value.percentage} onChange={this.handleChange.bind(this, i)}/>
						</div>
					</div>
					<div class="container-right" style={{"paddingTop": "9%", "marginBottom": "0px"}}>
						<Button text="X" textColor="var(--blue)" outline={false} onClick={this.removeClick.bind(this, i)} />
					</div>
				</div>

			</div>
		)
	}

	handleChange(i, event) {
		let values = [...this.state.values];
		values[i] = event.target.value;
		this.setState({values})
	}

	addClick() {
		this.setState(prevState => ({ values: [...prevState.values, '']}))
	}

	removeClick(i){
     	let values = [...this.state.values];
    	values.splice(i,1);
    	this.setState({ values });
  	}

  	handleSubmit(event) {
  		this.props.showResults(true)
    	alert('A name was submitted: ' + this.state.values.join(', '));
    	event.preventDefault();
  	}

  render() {
    return (
		<div>
		<Modal style={{"backgroundColor" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
			<div class="container">
				<h3>Test Product</h3>
				<p style={{"margin-top": "10px"}}>Enter the material breakdown of the product to compute its carbon performance</p>

				<p style={{"font-weight": "bold", "margin-top": "20px"}}>Clothing Category</p>
				
				<div class="dropdown">
				 		<button class="dropbtn">Select Category</button>
						<div class="dropdown-content">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
				</div>

				<div class="container-left" style={{"width": "60%", "padding-left": "0px", "paddingRight": "0px"}}>
					<p style={{"font-weight": "bold", "margin-top": "10px"}}>Fibre</p>
		  		</div>

		  		<div class="container-right" style={{"padding-left": "20px", "paddingTop": "0px"}}>
	  				<div class="container-left" style={{"maxWidth": "70%"}}>
						<p style={{"font-weight": "bold", "margin-top": "10px"}}>Percentage</p>
					</div>
				</div>
				<form style={{"margin-top": "0px"}}>
          			{this.createUI()}        
     			 </form>
          		<Button text=" + Add Fibre" textColor="var(--blue)" outline={false} onClick={this.addClick.bind(this)} />

				<div style={{"margin-top": "100px"}}>
					<Button onClick={this.handleSubmit} text="Analyze Product" color="var(--blue)" textColor="var(--white)" center={true}/>
				</div>


			</div>
		</Modal>
	</div>
    );
  }
}

export default TestPanel

// export default TestPanel