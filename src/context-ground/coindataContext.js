import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';



export const CoinContext = createContext();

export const CoinProvider = (props) => {

      const [ coindata, setCoinData] = useState({})

      useEffect( ()=> {
            axios({

                  method : 'get',
                  url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
                  responseType : 'application/json'
            })
            .then((res)=> {
                  console.log('----res', res)
                  return res.data.bpi
            })
            .then((data)=>{
                  console.log('----data',data)
                  setCoinData(data) 


            })
            .catch((err)=> {
                  console.log('---err', err)

            })


      }, [])



      return (
            <CoinContext.Provider value={{coindata, setCoinData}}>
                   {props.children}
            </CoinContext.Provider>

      )
}


