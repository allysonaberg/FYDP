import React, { useState } from "react"
import Button from './Button'

const TaskList = (props) => {

  return (
    props.taskList.map((val, idx) => {
      let fibreName = `fibreName-${idx}`, fibrePercentage = `fibrePercentage-${idx}`
      return (
        <tr key={val.index}>
        	<div class="container-left" style={{"width": "70%", "padding-left": "0px", "padding-right": "0px"}}>
	            <select name="fibreName" id={fibreName} data-id={idx} onChange={console.log(this)} style={{"width": "100%", "height": "3em"}}>
	              <option value="Nylon">nylon</option>
	              <option value="Viscose">viscose</option>
	              <option value="Wool">Wool</option>
	              <option value="Linen">Linen</option>
	            </select>
            </div>
			    <div class="container" style={{"padding-left": "2em"}}>
            	<input type="text"  name="fibrePercentage" placeholder="%" data-id={idx} id={fibrePercentage} className="form-control " style={{"width": "60%", "height": "3em", "text-align": "right", "padding-right": "5px"}}/>
          <div class="container-right" style={{"padding": "0px"}}>
              <Button onClick={(() => props.delete(val))} text="x" outline={false} textColor={"var(--blue)"} />
          </div>
          </div>


        </tr >
      )
    })
  )
}
export default TaskList