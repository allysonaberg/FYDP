import React from 'react';
import Products from './Products'
import SidePanel from './SidePanel'

const Content = (props) => {
  return (
    <>
      <div class="container">
        <div className="container-center" id="filterContainer" style={{"paddingBottom": "0px", "paddingTop": "10px"}}>
          <div className="container-left">
            <p id="filterText">All Products</p>
          </div>
          <div className="container-right">
            <p id="filterText">Sales</p>
          </div>
          <div className='container' style={{"paddingTop": "10px", "margin": "0px", "width": "100%"}}>
            <hr />
          </div>
        </div>
      </div>

      <div class="container" id="containerMain">
        <div class="container-right">
          <SidePanel product={props.product} showInfoPanel={props.showInfoPanel} removePanel={props.removePanel}/>
        </div>
        <div class="container-center">
          <Products products={props.products} onToggle={props.onToggle} text={"Store products"}/>
          <p id="noProduct" style={{"visibility": !props.products.length ? "visible" : "hidden"}}>No products match your search query</p>
        </div>
      </div>
    </>
  )
}

export default Content
