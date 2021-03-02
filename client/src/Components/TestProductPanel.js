import React from "react";
import TaskList from "./TaskList"
import Modal from './Modal'


class TestProductPanel extends React.Component {
	state = {
		productType: "",
		taskList: [{index: Math.random(), fibreName: "", fibrePercentage: ""}],
	}

	handleChange = (e) => {
		if (["fibreName", "fibrePercentage"].includes(e.target.name)) {
			let taskList = [...this.state.taskList]
			taskList[e.target.dataset.id][e.target.name] = e.target.value;
		} else {
			this.setState({ [e.target.name]: e.target.value })
		}
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
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }

    render() {
        let { taskList } = this.state
        return (
		<Modal style={{"background-color" : "black !important"}} show={this.props.isPanelOpen} close={() => this.props.showPanel(false)}>
            <div className="content">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <h3>Test Product</h3>
					<p style={{"margin-top": "10px"}}>Enter the material breakdown of the product to compute its carbon performance</p>
					<p style={{"font-weight": "bold", "margin-top": "20px"}}>Clothing Category</p>
					<div class="dropdown">
                        <select name="clothingType" style={{"width": "50%", "height": "3em"}}>
  							<option value="Women's Sweater">Women's Sweater</option>
 							<option value="Men's Pants">Men's Pants</option>
  							<option value="Shirt">Shirt</option>
  							<option value="Sweater">Sweater</option>
						</select>
					</div>
                    <table className="table">
						<div class="container-left" style={{"width": "60%", "padding-left": "0px", "padding-right": "0px"}}>
							<p style={{"font-weight": "bold", "margin-top": "10px"}}>Fibre</p>
			  			</div>

			  			<div class="container-right" style={{"padding-left": "0px"}}>
							<p style={{"font-weight": "bold", "margin-top": "10px"}}>Percentage</p>
						</div>
	                        <tbody>
	                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
	                        </tbody>
	                        <tfoot>
	                            <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
	                        </tfoot>
                    </table>
                    <button onClick={()=>this.addNewRow()} type="button">+ Add Fibre</button>
                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                </form>
            </div>
            </Modal>
        )
    }
}


export default TestProductPanel


