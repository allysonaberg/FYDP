import React from 'react';
import Button from './Button'
import Modal from './Modal'
import publish from '../Assets/publish.png'
import publish_2 from '../Assets/publish_2.png'
import uhoh from '../Assets/uhoh.png'

class PublishPanel extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
		<div>
		<Modal style={{"backgroundColor" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
			<div class="container" style={{"padding": "2em"}}>
				<div class="container" style={{"display": "block", "text-align": "center"}}>
					<img src={publish} />
				</div>
				<div class="container" style={{"display": "block", "text-align": "center"}}>
					<h2 style={{"margin-bottom": "10px"}}>Publish Results</h2>
					<p style={{"padding": "10px"}}>Publish the carbon emissions and rankings on your storefront for your customers to see!</p>
				</div>
				<div class="container" style={{"display": "block", "text-align": "center"}}>
					<img src={publish_2} style={{"width": "100%"}}/>
				</div>
				<div class="container" style={{"display": "block", "text-align": "center"}}>
					<p style={{"color": "#6583FE", "fontWeight": "bold", "paddingBottom": "15px", "padding": "10px"}}><img src={uhoh} style={{"paddingRight": "10px"}}/>You can configure the design in your Shopify Editor</p>
				</div>
				<Button onClick = {() => this.props.showPublishOptions(true)} text="Next" color={"var(--white)"} textColor={"var(--blue)"} center={true} outline={true}/>

			</div>
		</Modal>
	</div>
    );
  }
}

export default PublishPanel