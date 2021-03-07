import React from "react";
import FibreList from "./FibreList"
import Modal from './Modal'
import Button from './Button'


class TestProductPanel extends React.Component {
	state = {
		productType: "Women's Sweater",
		fibreList: [{id: "0", fibreName: "Nylon", fibrePercentage: "0"}],
	}

    handleClothingTypeChange = (e) => {
        this.setState({
            productType: e.target.value
        })

        console.log(this.state)
    }

    handleFibreChange = (e) => {
        console.log("something changed")
        if (e.target.name == "fibreName") {
            this.handleFibreNameChange(e.target.id, e.target.value)
        } else {
            this.handleFibrePercentageChange(e.target.id, e.target.value)
        }
    }

	handleFibreNameChange(id, val) {
        console.log("name change")
        console.log(val)
        var newFibre = {
            id: id,
            fibreName: val,
            fibrePercentage: ""
        }

        var containsItem = false

        this.state.fibreList.map((fibreItem) => {
            if (fibreItem.id == id) {
                containsItem = true
            }
        })
        if (containsItem) {
            this.setState(prevState => {
                let newFibres = prevState.fibreList;
                let fibre = newFibres.find(d => d.id == newFibre.id)
                fibre.fibreName = val
                return {fibreList: newFibres };
            })
        } else {
            this.setState(previousState => ({
                fibreList: [...previousState.fibreList, newFibre]
            }));
        }

        console.log(this.state.fibreList)
	}

    handleFibrePercentageChange = (id, val) => {
        console.log("percent change")
        console.log(val)
        var newFibre = {
            id: id,
            fibreName: "Nylon",
            fibrePercentage: val
        }

        var containsItem = false

        this.state.fibreList.map((fibreItem) => {
            if (fibreItem.id == id) {
                containsItem = true
            }
        })
        if (containsItem) {
            this.setState(prevState => {
                let newFibres = prevState.fibreList;
                let fibre = newFibres.find(d => d.id == newFibre.id)
                fibre.fibrePercentage = val
                return {fibreList: newFibres };
            })
        } else {
            this.setState(previousState => ({
                fibreList: [...previousState.fibreList, newFibre]
            }));
        }

        console.log(this.state.fibreList)
    }

	addNewRow = () => {
        console.log(this.state.fibreList.length)
        this.setState((prevState) => ({
            fibreList: [...prevState.fibreList, { id: this.state.fibreList.length.toString(), fibreName: "Nylon", fibrePercentage: ""}],
        }));
    }

    deleteRow = (e, record) => {
        e.preventDefault();
        console.log("DELETE")
        // this.setState({
        //     fibreList: this.state.fibreList.filter(r => r !== record)
        // });
    }

    handleSubmit = (e) => {
        console.log("SUBMIT")
        console.log(this.state)
        e.preventDefault();

        //do the work to submit the form
        //show the loading screen

        //ONCE FORM SUBMITTED, CLEAR FIBRES
        this.setState({
            fibreList: []
        })
        this.props.showResults(true)
    }

    render() {
        let { fibreList } = this.state
        return (
            <>
		<Modal style={{"background-color" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
                <div className="content">
                    <h3>Test Product</h3>
					<p style={{"margin-top": "10px"}}>Enter the material breakdown of the product to compute its carbon performance</p>
					<p style={{"font-weight": "bold", "margin-top": "20px"}}>Clothing Category</p>
					<div class="dropdown">
                        <select name="clothingType" onChange={this.handleClothingTypeChange} style={{"width": "100%", "height": "3em"}}>
  							<option value="Women's Sweater">Women's Sweater</option>
 							<option value="Men's Pants">Mens Pants</option>
  							<option value="Shirt">Shirt</option>
  							<option value="Sweater">Sweater</option>
						</select>
					</div>
                    <form onChange={this.handleFibreChange}>
                        <table className="table" style={{"width": "100%"}}>
    						<div class="container-left" style={{"width": "70%", "padding-left": "0px", "padding-right": "0px"}}>
    							<p style={{"font-weight": "bold", "margin-top": "10px"}}>Fibre</p>
    			  			</div>

    			  			<div class="container" style={{"padding-left": "2em"}}>
    							<p style={{"font-weight": "bold", "margin-top": "10px"}}>Percentage</p>
    						</div>
    	                    <tbody>
    	                       <FibreList delete={this.deleteRow} fibreList={fibreList} />
    	                    </tbody>
                        </table>
                    </form>
                    <Button onClick={()=>this.addNewRow()} text="+ Add Fibre" outline={false} textColor={"var(--blue)"} />
                    <div class="container" style={{"margin-top": "1.5em"}}> 
                        <Button onClick = {this.handleSubmit} text="Analyze" color={"var(--blue)"} textColor={"White"} center={true}/>
                    </div>
                </div>
            </Modal>
            </>
        )
    }
}


export default TestProductPanel


