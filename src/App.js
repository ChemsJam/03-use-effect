import logo from './logo.svg';
import './App.css';
import { PruebaComponent } from './components/PruebaComponent';
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <AjaxComponent/>
        <hr/>
        <PruebaComponent/>
      </header>
    </div>
  );
}

export default App;
