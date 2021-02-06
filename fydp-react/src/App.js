import Header from './Components/Header'
import Button from './Components/Button'

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
	    	<div class="container-right">RIGHT</div>
	    	<div class="container-center">CENTER</div>
	    </div>
    </div>
  );
}

export default App;
