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
      this.setState({isLoading: true});
    }

    componentDidMount() {
      this.getProducts().then(() => {
        this.setState({ isLoading: false });
        
     }, (error) => {
        this.setState({ isLoading: false });
        console.log(error);
     });

     
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
       isShowingTestPanel: showPanel,
       isShowingTestResultsPanel: false
      })
   }
   showResults(showPanel) {
    console.log("SHOWING RESULTS")
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
    if(status===200)
    {
      const productList = promise.data;
      console.log(productList);
      this.setState({productList: productList, filteredProductList: productList});
      const firstProduct = this.state.productList[0];
      this.setProduct(firstProduct);
      console.log("STATE: ")
      console.log(this.state)
    }
    return []
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>Loading...</div>
      )
    }
    
    return (
      <div className="root">
        <Header showPanel={this.showTest} isPanelOpen={this.state.isShowingTestPanel} showResultsPanel={this.showResults} isResultsPanelOpen={this.state.isShowingTestResultsPanel} input={this.state.input} onChange={this.updateInput} />
        <Content products={this.state.filteredProductList} product={this.state.product} showInfoPanel={this.state.showInfoPanel} removePanel={this.removeInfoPanel} onToggle={this.updateSpotlightProduct} />
      </div>
    );
  }
}
