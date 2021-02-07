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
	      	<Button text={"Download Report"}/>
	      	<Button text={"Test Product"} color={"var(--blue)"} textColor={"White"}/>
	      </div>
	      <div class="header-search">SEARCH</div>
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
