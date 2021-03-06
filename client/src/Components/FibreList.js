import React from "react";
import Button from './Button'

class FibreList extends React.Component {

  render() {
    return (
    this.props.fibreList.map((val, idx) => {
      let fibreName = idx, fibrePercentage = idx
      return (
        <tr key={val.index}>
        	<div class="container-left" style={{"width": "70%", "padding-left": "0px", "paddingRight": "0px"}}>
	            <select name="fibreName" id={fibreName} data-id={idx} style={{"width": "100%", "height": "3em"}}>
	              <option value="nylon6">Nylon</option>
	              <option value="polyester">Polyester</option>
	              <option value="acrylic">Acrylic</option>
	              <option value="wool">Wool</option>
                <option value="cotton">Cotton</option>
	            </select>
            </div>
			    <div class="container" style={{"padding-left": "2em"}}>
            	<input type="text"  name="fibrePercentage" placeholder="%" data-id={idx} id={fibrePercentage} style={{"width": "60%", "height": "3em", "textAlign": "right", "paddingRight": "5px"}}/>
          <div class="container-right" style={{"padding": "0px"}}>
            <Button onClick={() => this.props.delete(val)} text="x" outline={false} textColor={"var(--blue)"} />
          </div>
          </div>
        </tr >
      )
    })
    )
  }
}
export default FibreList
