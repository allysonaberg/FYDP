import React from "react"
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let fibreName = `fibreName-${idx}`, fibrePercentage = `fibrePercentage-${idx}`
      return (
        <tr key={val.index}>
        	<div class="container-left" style={{"width": "60%", "padding-left": "0px", "padding-right": "0px"}}>
	            <select name="fibreName" id={fibreName} data-id={idx} className="form-control" style={{"width": "100%", "height": "3em"}}>
	              <option value="Nylon">nylon</option>
	              <option value="Viscose">viscose</option>
	              <option value="Wool">Wool</option>
	              <option value="Linen">Linen</option>
	            </select>
            </div>
			<div class="container-right" style={{"padding-left": "0px"}}>
            	<input type="text"  name="fibrePercentage" data-id={idx} id={fibrePercentage} className="form-control " style={{"width": "100%", "height": "3em"}}/>
          	</div>
          <td>
            {
				<button onClick={(() => props.delete(val))} >X</button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList