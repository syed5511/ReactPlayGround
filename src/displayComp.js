import React ,{ useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const FetchData = (obj) => {
      console.log('----obj',obj)
       
            axios({
                  method: 'get',
                  url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
                  responseType : 'application/json'
            })
            .then((res)=> {
                  console.log('----res12333',res)
                  return res.data.bpi
            })
            .then((data)=>{
                  obj.saveData(data)

                  console.log('----data44444',data)
                  // setCoinData(data) 
            }).catch((err)=> {
                  console.log('----err444',err)
      
            })
   
}



const DisplayData = (props) => {

      console.log('-----DisplayDatProps', props)

      useEffect( ()=> {

            FetchData( {saveData: props.saveData})

      }, [] )


      return (

             <div> Display Data </div>
      )

} 

const mapStateToProps = (state) => {

return state

}

const mapDisPatchToProp = (dispatch) => {

      return {
            saveData : (data)=>{dispatch({ type : 'SAVE_DATA' , payload : data})},
            fetchData : (data)=>{dispatch({ type : 'FETCH_DATA' , payload : data})}
      }

}

export default connect (mapStateToProps, mapDisPatchToProp) (DisplayData)

// const saveDataActionCreateor = (data) => {
//       return { type : 'SAVE_DATA' , payload : data}
// }
// saveData : (data)=>{dispatch(saveDataActionCreateor(data))}
