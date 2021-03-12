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
	              <option value="Nylon">nylon</option>
	              <option value="Viscose">viscose</option>
	              <option value="Wool">Wool</option>
	              <option value="Linen">Linen</option>
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
