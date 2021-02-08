import Header from './Components/Header'
import Button from './Components/Button'
import Products from './Components/Products'
import SidePanel from './Components/SidePanel'

function App() {
  return (
  	<div className="root">
	    <div className="header">
	      <div class="header-left">FYDP</div>
	      <div class="header-right">
	      	<Button text={"Download Report"} color={"var(--white)"} textColor={"var(--blue)"} outline={true}/>
	      	<Button text={"Test Product"} color={"var(--blue)"} textColor={"White"}/>
	      </div>
	      	<form class="header-search">
	      	<input type="text" id="searchBar" name="search" value="Search item"></input>
	      	<Button text={"search"}type="submit" style={{"float": "right"}} >SEARCH</Button>
	      </form>
	    </div>

	    <div class="container">
	    	<div class="container-right">
	    		<SidePanel />
	    	</div>
	    	<div class="container-center">
	    		<Products text={"Store products"}/>
	    	</div>
	    </div>
    </div>
  );
}

export default App;
