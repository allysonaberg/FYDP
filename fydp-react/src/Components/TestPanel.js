import React from 'react';
import Button from './Button'
import Modal from './Modal'

const TestPanel = (props) => {
	return ( 
		<div>
			<Modal style={{"background-color" : "black !important"}} show={props.isPanelOpen} close={() => props.showPanel(false)}>
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

					<div class="container-left" style={{"width": "79%", "padding-left": "0px"}}>
					<p style={{"font-weight": "bold", "margin-top": "10px"}}>Fibre</p>

					<div class="dropdown">
		 			 	<button class="dropbtn">Select Fibre</button>
		  				<div class="dropdown-content">
		  					<a href="#">Link 1</a>
		  					<a href="#">Link 2</a>
		  					<a href="#">Link 3</a>
		  				</div>
		  			</div>
		  			</div>

		  			<div class="container-right" style={{"padding-left": "0px"}}>
					<p style={{"font-weight": "bold", "margin-top": "10px"}}>Percentage</p>
					
					<div class="dropdown">
		 			 		<button class="dropbtn">  %</button>
		  					<div class="dropdown-content">
		  						<a href="#">Link 1</a>
		  						<a href="#">Link 2</a>
		  						<a href="#">Link 3</a>
		  					</div>
					</div>
					</div>

					<Button text=" + Add Fibre" textColor="var(--blue)" outline={false} />
					<div style={{"margin-top": "100px"}}>
						<Button onClick={() => props.showResults(true)} text="Analyze Product" color="var(--blue)" textColor="var(--white)" center={true}/>
					</div>
				</div>
			</Modal>
		</div>
	)
}

TestPanel.defaultProps = {
	background: "var(--white)"
}

export default TestPanel