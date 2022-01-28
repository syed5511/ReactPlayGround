import logo from './logo.svg';
import DisplayDataComponent  from './redux-ground/displayComp'
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
      <DisplayDataComponent />

    </div>
  );
}

export default App;
