import React from 'react'
import { countries  } from "../../Data/countries";
import ButtonSimple, { ButtonSimple1 } from '../../components/Buttons/ButtonSimple';

export default function Countries() {
 const fruits = ["Apple","Mango","Straw","Banana","Grapes","Peach"]

// Destructuring Opreator

//  const user = {firstname:"Shahid",lastname:"Zafar",age:"20",city:"Faisalabad"}
//  const {firstname ,lastname} = user

// Spread Operator Simple

//  const fruit1 = ["Apple","Mango"]
//  const fruit2 = ["Banana","Peach"]
//  const combinedboth = [...fruit1, ...fruit2]
//  console.log(combinedboth);

// Spread Operator in array

//  const data ={
//     car :'honda',
//     model :'civic',
//  }
//  const spec= {
//     type : 'car',
//     year : 2021,
//  }
//  const spec1= {
//     type : 'car',
//     year : 2021,
//  }

//  const combined = [data, { ...spec },{...spec1}];
//  console.log(combined);
    return (
      <div className='py-20 bg-orange-800'>
      <div className='container'>
          <div className='row'>
              <div className='col'>
                  <h1 className='text-center text-2xl' >
                      This is our Country Section
                      {/* <p>User name is {firstname} {lastname}</p> */}
                  </h1>
               {/* <div className='text-center'>
                 <ul>
                    {
                        fruits.map((fruits,index)=>{
                            return <li key={fruits} className='text-red-600'>{index} {fruits}</li>
                        })
                    }
                 </ul>
  
               </div> */}

               <ul className='text-center'>
                  {
                    countries.map((country,index)=>{
                        return <li key={index}>{index} {country}</li>
                    })
                  }
               </ul>
              </div>
              <div className='text-center mb-2'>
              <ButtonSimple bg="success" />
              </div>
              <div className='text-center'>
              <ButtonSimple1  bg="Primary"/>

              </div>
             
          </div>
      </div>
   </div>
    )
  
    }
 