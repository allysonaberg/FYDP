import React from 'react';
import Button from './Button'
import Modal from './Modal'

class DownloadPanel extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}

	getReport = (e) => {
		this.props.getReport().then((report) => {
			console.log(report)       
     }, (error) => {
        console.log(error);
     });
	}

	render() {
		return (
		<div>
			<Modal style={{"backgroundColor" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
				<div class="container">
					<h3>Would you like to download all available store data?</h3>
					<div class="container" style={{"padding-top": "1em"}}>
						<Button onClick={this.getReport} text={"yes please"} color={"var(--blue)"} textColor={"var(--white)"} outline={true} center={true} />
					</div>
				</div>
			</Modal>
		</div>
	);
	}
}


export default DownloadPanel