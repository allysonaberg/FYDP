import React from 'react';

const FibreField = (props) => {
	return (
		<>
					<div class="container-left" style={{"width": "79%", "padding-left": "0px"}}>
					<p style={{"font-weight": "bold", "margin-top": "10px"}}>Fibre</p>

					<div class="dropdown">
		 			 	<button class="dropbtn">Select Fibre</button>
		  				<div class="dropdown-content">
		  					<a href="#">Nylon</a>
		  					<a href="#">Viscose</a>
		  					<a href="#">Wool</a>
		  					<a href="#">Linen</a>
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
		</>
	)
}

export default FibreField