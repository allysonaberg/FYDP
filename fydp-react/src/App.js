import Header from './Components/Header'
import Button from './Components/Button'
import Products from './Components/Products'
import SidePanel from './Components/SidePanel'

function App() {
  return (
  	<div className="root">
	    <div className="header">
	    	<Header />
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
