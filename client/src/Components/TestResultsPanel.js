import React from 'react';
import Button from './Button'
import Modal from './Modal'

const TestResultsPanel = (props) => {
	console.log("RESULTS")
	console.log(props.results)
	return ( 
		props.results ?
		<div>
			<Modal style={{"backgroundColor" : "black !important"}} show={props.isPanelOpen} close={() => props.showPanel(false)}>
				<div class="container">
					<h3>Results</h3>

					<div class="container" id="containerDark">
						<p>Carbon Peformance</p>
						<p style={{"marginTop": "10px", "marginBottom": "10px", "fontSize": "18px"}}><b>{(props.results.kg_carbon*1000).toFixed(2)} gC02</b> emitted per item</p>
						<Button text={"A"} rankButton={true}/>
						<p style={{"marginTop": "10px"}}>An average item emits 162 gC02</p>
					</div>

					<div class="container" style={{"marginTop": "10px"}}>
						<p style={{"color": "var(--textGrey)", "fontWeight": "bold"}}>MATERIAL BREAKDOWN</p>
						<hr style={{"color": "var(--textGrey)"}}/>

						{props.results.materials.map((product) => (
							<div class="container" style={{"padding": "0px"}}>
								<div class="container-left" style={{"padding-left" : "0px"}}>
									<p class="productInfoText">{product.ratio*100}% {product.name}</p>

								</div>
								<div class="container-right" style={{"paddingRight":"0px", "text-align": "right"}}>
									<p class="productInfoText">{product.kg_carbon} gC02</p>
								</div>
							</div>
						))}
						
					</div>

					<div class="container" style={{"marginTop": "10px"}}>
						<p style={{"color": "var(--textGrey)", "fontWeight": "bold"}}>SUGGESTIONS</p>
						<hr style={{"color": "var(--textGrey)"}}/>

						{props.results.suggestions.map((suggestion) => (
							<div class="container">
								<p class="productInfoText">{suggestion}</p>
							</div>
						))}
						
					</div>

					<div style={{"marginTop": "100px"}}>
						<Button onClick={() => props.showTest(true)} text="Analyze Another Product" color="var(--white)" textColor="var(--blue)" center={true} outline={true}/>
					</div>

				</div>
			</Modal>
		</div>
		:
		<div />
	)
}

TestResultsPanel.defaultProps = {
	background: "var(--white)",
}

export default TestResultsPanel