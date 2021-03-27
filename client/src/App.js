import Header from './Components/Header'
import Auth from './Components/Auth'
import Content from './Components/Content'
import Button from './Components/Button'
import React, {Component, useState } from 'react'
import { Provider } from '@shopify/app-bridge-react';
import axios from "axios";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { withRouter, useParams } from "react-router-dom";
import { render } from 'react-dom';



  export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productList:[],
        filteredProductList:[],
        input: "",
        token: "",
        results: []
      };

      this.getProducts = this.getProducts.bind(this); 
      this.updateSpotlightProduct = this.updateSpotlightProduct.bind(this);
      this.removeInfoPanel = this.removeInfoPanel.bind(this);
      this.showTest = this.showTest.bind(this);
      this.showResults = this.showResults.bind(this);
      this.showReportPanel = this.showReportPanel.bind(this);
      this.showPublish = this.showPublish.bind(this);
      this.showPublishOptions = this.showPublishOptions.bind(this);
      this.showDownloadPanel = this.showDownloadPanel.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.getReport = this.getReport.bind(this);
      this.testProduct = this.testProduct.bind(this);
    }

    componentWillMount() {

      this.setState({isLoading: true});
    }

    componentDidMount(props) {
      if (this.props.location) {
        console.log(this.props.location.state.store_name)
      } 

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
     this.setState({
       isShowingTestResultsPanel: showPanel,
       isShowingTestPanel: false
     })
   }

   showPublish(showPanel) {
    this.setState({
      isShowingPublishPanel: showPanel,
      isShowingPublishOptionsPanel: false
    })
   }

   showReportPanel(showReportPanel) {
     this.setState({
       isShowingReportPanel: showReportPanel
     })
   }

  showPublishOptions(showPanel) {
    this.setState({
      isShowingPublishOptionsPanel: showPanel,
      isShowingPublishPanel: false
    })
   }

   showDownloadPanel(showPanel) {
    this.setState({
      isShowingDownloadPanel: showPanel
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
    const promise = await axios.get("/product");
    const status = promise.status;
    console.log(status)
    if(status===200)
    {
      const productList = promise.data;
      this.setState({productList: productList, filteredProductList: productList});
      const firstProduct = this.state.productList[0];
      this.setProduct(firstProduct);
      console.log(productList)
    }
    return []
  }

  async testProduct(data)
  {
    const promise = await axios.post("/test", {"product_type": data.product_type, "grams": data.grams, "materials": data.materials});
    const status = promise.status;
    console.log(status)
    if(status===200)
    {
      const result = promise.data;
      console.log(result)
      this.setState({testResults: result})
      this.showResults(true)
    }

    return []
  }

  async getReport() {
    const promise = await axios.get("/report");
    const status = promise.status;
    if (status===200) {
      const report = promise.data;
      return report
    }
    return []
  }


  render() {

    if (this.state.isLoading) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      )
    }

    return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <Auth {...props}/>}/>
        <Route path="/test">
          <h3>TEST</h3>
        </Route>
        <Route path="/">
          <div className="root">
            <Header products={this.state.productList} showPanel={this.showTest} isPanelOpen={this.state.isShowingTestPanel} showResultsPanel={this.showResults} isResultsPanelOpen={this.state.isShowingTestResultsPanel} resultsState={this.state.testResults} showPublishPanel={this.showPublish} showPublishOptions={this.showPublishOptions} isPublishPanelOpen={this.state.isShowingPublishPanel} isPublishOptionsPanelOpen={this.state.isShowingPublishOptionsPanel} input={this.state.input} onChange={this.updateInput} showDownloadPanel={this.showDownloadPanel} isDownloadPanelOpen={this.state.isShowingDownloadPanel} getReport={this.getReport} testProduct={this.testProduct} />
            <Content products={this.state.filteredProductList} product={this.state.product} showInfoPanel={this.state.showInfoPanel} removePanel={this.removeInfoPanel} onToggle={this.updateSpotlightProduct} />
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
    </div>
    );
  }}