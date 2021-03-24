import React from 'react';
import Button from './Button'
import Modal from './Modal'

const TestResultsPanel = (props) => {
	return ( 
		<div>
			<Modal style={{"backgroundColor" : "black !important"}} show={props.isPanelOpen} close={() => props.showPanel(false)}>
				<div class="container">
					<h3>Results</h3>

					<div class="container" id="containerDark">
						<p>Carbon Peformance</p>
						<p style={{"marginTop": "10px", "marginBottom": "10px", "fontSize": "18px"}}><b>202.8 C02</b> emitted per sweater</p>
						<Button text={"A"} rankButton={true}/>
						<p style={{"marginTop": "10px"}}>An average sweater emits 162 gC02</p>
					</div>

					<div class="container" style={{"marginTop": "10px"}}>
						<p style={{"color": "var(--textGrey)", "fontWeight": "bold"}}>MATERIAL BREAKDOWN</p>
						<hr style={{"color": "var(--textGrey)"}}/>
						<div class="container-left" style={{"padding-left" : "0px"}}>
							<p class="productInfoText">12% Nylon</p>
							<p class="productInfoText">30% Viscose</p>
							<p class="productInfoText">38% Wool</p>
							<p class="productInfoText">20% Linen</p>
						</div>
						<div class="container-right" style={{"paddingRight":"0px", "text-align": "right"}}>
							<p class="productInfoText">26.1 gC02</p>
							<p class="productInfoText">85.0 gC02</p>
							<p class="productInfoText">28.4 gC02</p>
							<p class="productInfoText">12.3 gC02</p>
						</div>
					</div>

					<div style={{"marginTop": "100px"}}>
						<Button onClick={() => props.showTest(true)} text="Analyze Another Product" color="var(--white)" textColor="var(--blue)" center={true} outline={true}/>
					</div>

				</div>
			</Modal>
		</div>
	)
}

TestResultsPanel.defaultProps = {
	background: "var(--white)"
}

export default TestResultsPanel