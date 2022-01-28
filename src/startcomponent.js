import React, { useEffect,  useState } from 'react';
import axios from 'axios';


const DisplayCard = () => {

      const [ coindata, setCoinData ] = useState({})
      const { code, rate} = coindata

      // console.log('----coindata',coindata)
      console.log('---===',code, rate)

      useEffect(()=> {

            axios({
                  method : 'get',
                  url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
                  responseType : 'application/json'
            })
            .then((res)=> {

                  console.log('---- res',res)
                  return res.data.bpi.USD

            })
            .then((data)=> {
                  console.log('-----data',data)
                  setCoinData(data)
            })
            .catch((err)=> {

                  console.log('----err',)
            })

      },[ ])

      console.log('----coindata', coindata)

      return(

            <>
             <div style={{ border : '1px solid black'}}> Content USD { code }</div>
             <div style={{ border : '1px solid Red' , height : '50px' , textAlign : 'center' , paddingTop : '20px'}}> Rate  { rate }</div>
            </>
      )
}

export default DisplayCard