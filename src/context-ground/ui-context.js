import React , { useContext, useState } from 'react';
import { CoinContext } from './coindataContext'





const UIContextCard = ()=> {

      const { coindata, setCoinData} =useContext(CoinContext)
      console.log('-----displaycompt',coindata)

      // // Below code is for input filter 
      // const  [inputState, setInputState ] = useState('')
      // const inputChange = (event)=> {
      //       const value = event.target.value
      //       setInputState(value)
      //       console.log(coindata[value])
      //  }
      // const data = coindata[inputState]  || {}

      return (
           <>
            <div style={{ border : '1px solid black'}}>  {(coindata.USD || {}).code}</div>
            <div style={{ border : '1px solid Red' , height : '50px' , textAlign : 'center' , paddingTop : '20px'}}>  {(coindata.USD || {}).rate } </div>  
           </>


            // <div>
            //       <input type='text' onChange ={inputChange} />
            //       {data.code || ''} <br/>
            //       {data.rate || ''}
            // </div>

      )
}


export default UIContextCard