import logo from './logo.svg';
import DisplayData  from './displayComp'
import { CoinProvider } from './context-ground/coindataContext'
import DisplayComponent from './context-ground/displayComponent'

import './App.css';

function App() {
  return (
    <div className="App">
       Hello Syed 
      <CoinProvider >
         <DisplayComponent/>
      </CoinProvider>
      <br/>
      <DisplayData />

    </div>
  );
}

export default App;
