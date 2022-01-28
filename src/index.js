import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = { 

  school : 'shadan',
  college: 'Lsbu'
}

const reducer1 = ( state = initialState, action) => {
  console.log('---STRING',action)
  if(action.type === 'SAVE_DATA') {

    return {
      ...state,
      coinDataRedux : action.payload
      
    }
  }
  return state
}



const reducer2 = ( state = initialState, action) => {
  console.log('---STRING',action)
  if(action.type === 'SAVE_DATA') {

    return {
      ...state,
      coinDataRedux : action.payload
      
    }
  }
  return state
}

// const store = createStore(combineReducers({reducer1,reducer2}), applyMiddleware(reduxthunk));
const store = createStore(reducer1);



ReactDOM.render(
 
  <React.StrictMode>
     < Provider store={store}>
         <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
