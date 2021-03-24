import React from 'react';
import Button from './Button'
import Modal from './Modal'
import publish_done from '../Assets/publish_done.png'


class PublishOptionsPanel extends React.Component {

 constructor(props) {
	super(props);

	this.state = {
        isComplete: false
     };
 }

 handleSubmit = (e) => {
 		//do some backend stuff
        e.preventDefault();
        this.setState({
            isComplete: true
        })
 }

 handleClose = (e) => {
 	this.setState({
 		isComplete: false
 	})

 	this.props.showPanel(false)
 }


  render() {
    return (
    	this.state.isComplete ? 
    	<div>
			<Modal style={{"backgroundColor" : "black !important"}} show={this.props.isPanelOpen} close={this.handleClose}>
				<div class="container" style={{"padding": "2em"}}>
					<div class="container" style={{"display": "block", "text-align": "center"}}>
						<img src={publish_done} />
					</div>
					<div class="container" style={{"display": "block", "text-align": "center"}}>
						<h2 style={{"margin-bottom": "10px"}}>Publish Complete</h2>
						<p style={{"padding": "10px"}}>Your customers can now see information about the product sustainability on your product pages.</p>
					</div>
				</div>
			</Modal>
    	</div>
    	:
		<div>
			<Modal style={{"backgroundColor" : "black !important"}} show={this.props.isPanelOpen} close={this.handleClose}>
				<div class="container">
					<h2 style={{"margin-bottom": "10px"}}>Publish Results</h2>
					<p style={{"paddingTop": "10px"}}>Select the items you would like to publish the results for</p>
				</div>

				<div class="container">
					<p>Items To Be Published</p>
					<div class="container-scroll">
						<div class="publishContainer">
								<input type="checkbox" style ={{"margin-right": "10px", "marginTop": "2px"}}/>All Products<br />
						</div>
						{this.props.products.map((product) => (
							<div class="publishContainer">
								<input type="checkbox" style ={{"float": "left", "margin-right": "10px", "marginTop": "2px"}}/>{product.name}<br />
								<div class="container-right" style={{"padding": "0px"}}>
									<Button text={product.rank} rankButton={true} outline={false} size="10px"/>
								</div>
							</div>
						))}
					</div>
				</div>

				<Button onClick = {this.handleSubmit} text="Publish Results" color={"var(--blue)"} textColor={"var(--white)"} center={true} outline={true}/>

			</Modal>
		</div>
    );
  }
}

export default PublishOptionsPanel