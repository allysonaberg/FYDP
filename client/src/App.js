import Header from './Components/Header'
import Content from './Components/Content'
import Button from './Components/Button'
import React, {Component, useState } from 'react'
import { Provider } from '@shopify/app-bridge-react';
import axios from "axios";


  export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productList:[],
        filteredProductList:[],
        input: ""
      };
      this.getProducts = this.getProducts.bind(this);
      this.updateSpotlightProduct = this.updateSpotlightProduct.bind(this);
      this.removeInfoPanel = this.removeInfoPanel.bind(this);
      this.showTest = this.showTest.bind(this);
      this.showResults = this.showResults.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }

    componentWillMount() {
      this.getProducts();
      this.setState({
        product: {
            id: 1,
            name: 'Cozy Fleece Perfect 2" Sweatshort',
            carbon: '42.6',
            rank: 'A',
            image: "./Assets/shirt.png",
            material1: '78% cotton',
            material2: '22% Polyester',
            analysis: 'The production of polyester uses harmful chemicals, including carcinogens, and if emitted to water and air untreated, can cause significant environmental damage. Most polyester is produced in countries such as China, Indonesia and Bangladesh',
            suggestion: 'Consider swapping linen for cotton to reduce this item’s carbon footprint by 8.1 CO2'
          },
        showInfoPanel: true,
        isShowingTestPanel: false,
        isShowingTestResultsPanel: false,
        input: "",
      })

    }

    //FUNCTIONS
  updateSpotlightProduct(id) {
    const newProduct = this.state.productList.filter((product) => product.id == id)
    this.setProduct(newProduct[0])
 
    var collapsableContainer = document.getElementById("collapsableContainer")
    collapsableContainer.style.height="100%"
    this.setShowInfoPanel(true)
 
    var factPanel = document.getElementById("factPanel")
    factPanel.style.height = "0px"
    factPanel.style.visibility = "hidden"
    factPanel.style.padding="0px"
 
   }
 
   setShowInfoPanel(showPanel) {
    this.setState({
      showInfoPanel: showPanel
    })
   }

   setProduct(product) {
    this.setState({
      product: product
    })

   }

   removeInfoPanel() {
     this.setState({showInfoPanel: false})
     var collapsableContainer = document.getElementById("collapsableContainer")
     collapsableContainer.style.height="0px";
     collapsableContainer.style.padding="0px";
 
     var factPanel = document.getElementById("factPanel")
     factPanel.style.height = "100%"
     factPanel.style.visibility = "visible"
     factPanel.style.padding="10px"
   }
 
   showTest(showPanel) {
     this.setState({
       isShowingTestPanel: false,
       isShowingTestPanel: showPanel,
      })
   }
   showResults(showPanel) {
     this.setState({
       isShowingTestResultsPanel: showPanel,
       isShowingTestPanel: false
     })
   }

   updateInput(input) {

    if (!input || !input.length) {
      this.setState({
        input: input,
        filteredProductList: this.state.productList
      })
    }
    else {
      const filtered = this.state.productList.filter(product => {
        return product.name.toLowerCase().includes(input.toLowerCase())
      })

      this.setState({
        input: input,
        filteredProductList: filtered,
      })
    }
   }
  
  async getProducts()
  {
    const promise = await axios.get("http://localhost:5000/product");
    const status = promise.status;
    console.log("$$$$here????? \n\n\n\n\n\n");
    if(status===200)
    {
      const data = promise.data;
      
      console.log(data);
      this.setState({productList: data.productList, filteredProductList: data.productList});
    }
    return []
  }

  render() {
    return (
      <div className="root">
        <Header showPanel={this.showTest} isPanelOpen={this.state.isShowingTestPanel} showResultsPanel={this.showResults} isResultsPanelOpen={this.state.isShowingTestResultsPanel} input={this.state.input} onChange={this.updateInput} />
        <Content products={this.state.filteredProductList} product={this.state.product} showInfoPanel={this.state.showInfoPanel} removePanel={this.removeInfoPanel} onToggle={this.updateSpotlightProduct} />
      </div>
    );
  }
}
