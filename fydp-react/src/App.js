import Header from './Components/Header'
import Button from './Components/Button'

function App() {
  return (
    <div className="header">
      <div class="header-left">FYDP</div>
      <div class="header-right">
      	<Button text={"Download Report"}/>
      	<Button text={"Test Product"}/>
      </div>
      <div class="header-search">SEARCH</div>
    </div>
  );
}

export default App;
