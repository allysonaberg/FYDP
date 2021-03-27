import React from "react";
import FibreList from "./FibreList"
import Modal from './Modal'
import Button from './Button'


class TestProductPanel extends React.Component {
	state = {
		product_type: "Women's Sweater",
        grams: 0,
		materials: [{id: "0", name: "Nylon", ratio: 0}],
	}

    handleClothingTypeChange = (e) => {
        this.setState({
            product_type: e.target.value
        })

        console.log(this.state)
    }

    handleWeightChange = (e) => {
        this.setState({
            grams: parseFloat(e.target.value)
        })

        console.log(this.state)
    }

    handleFibreChange = (e) => {
        console.log("something changed")
        if (e.target.name == "fibreName") {
            this.handleFibreNameChange(e.target.id, e.target.value)
        } else {
            console.log(e.target.value)
            this.handleFibrePercentageChange(e.target.id, parseFloat(e.target.value)/100)
        }
    }

	handleFibreNameChange(id, val) {
        console.log(val)
        var newFibre = {
            id: id,
            name: val,
            ratio: 0
        }

        var containsItem = false

        this.state.materials.map((fibreItem) => {
            if (fibreItem.id == id) {
                containsItem = true
            }
        })
        if (containsItem) {
            this.setState(prevState => {
                let newFibres = prevState.materials;
                let fibre = newFibres.find(d => d.id == newFibre.id)
                fibre.name = val
                return {materials: newFibres };
            })
        } else {
            this.setState(previousState => ({
                materials: [...previousState.materials, newFibre]
            }));
        }

	}

    handleFibrePercentageChange = (id, val) => {
        console.log("percent change")
        console.log(val)
        var newFibre = {
            id: id,
            name: "Nylon",
            ratio: val
        }

        var containsItem = false

        this.state.materials.map((fibreItem) => {
            if (fibreItem.id == id) {
                containsItem = true
            }
        })
        if (containsItem) {
            this.setState(prevState => {
                let newFibres = prevState.materials;
                let fibre = newFibres.find(d => d.id == newFibre.id)
                fibre.ratio = val
                return {materials: newFibres };
            })
        } else {
            this.setState(previousState => ({
                materials: [...previousState.materials, newFibre]
            }));
        }

    }

	addNewRow = () => {
        console.log(this.state.materials.length)
        this.setState((prevState) => ({
            materials: [...prevState.materials, { id: this.state.materials.length.toString(), name: "Nylon", ratio: 0}],
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

        this.props.testProduct(this.state)

        //do the work to submit the form
        //show the loading screen

        //ONCE FORM SUBMITTED, CLEAR FIBRES
        this.setState({
            materials: []
        })
    }

    render() {
        let { materials } = this.state
        return (
            <>
		<Modal style={{"backgroundColor" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
                <div className="content">
                    <h3>Test Product</h3>
					<p style={{"marginTop": "10px"}}>Enter the material breakdown of the product to compute its carbon performance</p>
					<p style={{"fontWeight": "bold", "marginTop": "20px"}}>Clothing Category</p>
					<div class="dropdown">
                        <select name="clothingType" onChange={this.handleClothingTypeChange} style={{"width": "100%", "height": "3em"}}>
  							<option value="Women's Sweater">Women's Sweater</option>
 							<option value="Men's Pants">Mens Pants</option>
  							<option value="Shirt">Shirt</option>
  							<option value="Sweater">Sweater</option>
						</select>
					</div>
                    <p style={{"fontWeight": "bold", "marginTop": "20px"}}>Weight (single product)</p>
                    <div class="dropdown">
                        <form onChange={this.handleWeightChange}>
                            <div class="container">
                                <input type="text"  name="weight" placeholder="grams" style={{"width": "18%", "height": "3em", "margin-left": "0px", "text-align": "right", "padding": "10px"}}/>
                            </div>
                        </form>
                    </div>
                    <form onChange={this.handleFibreChange}>
                        <table className="table" style={{"width": "100%"}}>
    						<div class="container-left" style={{"width": "70%", "padding-left": "0px", "paddingRight": "0px"}}>
    							<p style={{"fontWeight": "bold", "marginTop": "10px"}}>Fibre</p>
    			  			</div>

    			  			<div class="container" style={{"padding-left": "2em"}}>
    							<p style={{"fontWeight": "bold", "marginTop": "10px"}}>Percentage</p>
    						</div>
    	                    <tbody>
    	                       <FibreList delete={this.deleteRow} fibreList={materials} />
    	                    </tbody>
                        </table>
                    </form>
                    <Button onClick={()=>this.addNewRow()} text="+ Add Fibre" outline={false} textColor={"var(--blue)"} />
                    <div class="container" style={{"marginTop": "1.5em"}}> 
                        <Button onClick = {this.handleSubmit} text="Analyze" color={"var(--blue)"} textColor={"White"} center={true}/>
                    </div>
                </div>
            </Modal>
            </>
        )
    }
}


export default TestProductPanel


