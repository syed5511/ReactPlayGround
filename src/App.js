import logo from './logo.svg';
import UIReduxCard  from './redux-ground/ui-redux.js'
import { CoinProvider } from './context-ground/coindataContext'
import UIContextCard from './context-ground/ui-context'

import './App.css';

function App() {
  return (
    <div className="App">
       Hello Syed 
      <CoinProvider >
         <UIContextCard />
      </CoinProvider>
      <br/>
      <UIReduxCard />

    </div>
  );
}

export default App;
