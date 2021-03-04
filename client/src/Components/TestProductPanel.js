import React from "react";
import TaskList from "./TaskList"
import Modal from './Modal'
import Button from './Button'



class TestProductPanel extends React.Component {
	state = {
		productType: "",
		taskList: [{index: Math.random(), fibreName: "", fibrePercentage: ""}],
	}

    handleClothingTypeChange = (e) => {
        this.setState({
            productType: e.target.value
        })
    }

	handleFibreNameChange = (e, index) => {
        console.log(e)
        console.log(index)
		// if (["fibreName"].includes(e.target.name)) {
		// 	let taskList = [...this.state.taskList]
		// 	taskList[e.target.dataset.id][e.target.name] = e.target.value;
		// } else {
		// 	this.setState({ [e.target.name]: e.target.value })
		// }

  //       console.log(this.state)
	}

    handleFibrePercentageChange = (e) => {
        if (["fibrePercentage"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }

        console.log(this.state)
    }

	addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), fibreName: "", fibrePercentage: ""}],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.date==='' || this.state.description==='')
        {
            
        }
        for(var i=0;i<this.state.taskList.length;i++)
        {
                if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
                {
                    
                }
        }
    }

    clickOnDelete(record) {
        console.log("DELETE")
        console.log(record)
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }

    render() {
        let { taskList } = this.state
        return (
		<Modal style={{"background-color" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
            <div className="content">
                <form onSubmit={this.handleSubmit} >
                    <h3>Test Product</h3>
					<p style={{"margin-top": "10px"}}>Enter the material breakdown of the product to compute its carbon performance</p>
					<p style={{"font-weight": "bold", "margin-top": "20px"}}>Clothing Category</p>
					<div class="dropdown">
                        <select name="clothingType" onChange={this.handleClothingTypeChange} style={{"width": "100%", "height": "3em"}}>
  							<option value="Women's Sweater">Women's Sweater</option>
 							<option value="Men's Pants">Men's Pants</option>
  							<option value="Shirt">Shirt</option>
  							<option value="Sweater">Sweater</option>
						</select>
					</div>
                    <table className="table" style={{"width": "100%"}}>
						<div class="container-left" style={{"width": "70%", "padding-left": "0px", "padding-right": "0px"}}>
							<p style={{"font-weight": "bold", "margin-top": "10px"}}>Fibre</p>
			  			</div>

			  			<div class="container" style={{"padding-left": "2em"}}>
							<p style={{"font-weight": "bold", "margin-top": "10px"}}>Percentage</p>
						</div>
	                        <tbody>
	                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} fibreChange={this.handleFibreNameChange.bind(this)} percentageChange={() =>this.handleFibrePercentageChange()} />
	                        </tbody>
                    </table>
                    <Button onClick={()=>this.addNewRow()} text="+ Add Fibre" outline={false} textColor={"var(--blue)"} />
                <div class="container" style={{"margin-top": "1.5em"}}> <Button text="Analyze Product" color={"var(--blue)"} textColor={"White"} center={true}/></div>
                </form>
            </div>
            </Modal>
        )
    }
}


export default TestProductPanel


