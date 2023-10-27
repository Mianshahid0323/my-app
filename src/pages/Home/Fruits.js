import React from 'react'

export default function Fruits() {
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
      <div className='py-20 bg-yellow-400'>
      <div className='container'>
          <div className='row'>
              <div className='col'>
                  <h1 className='text-center text-2xl' >
                      This is our Fruit Section
                      {/* <p>User name is {firstname} {lastname}</p> */}
                  </h1>
               <div className='text-center'>
                 <ul>
                    {
                        fruits.map((fruits,index)=>{
                            return <li key={fruits} className='text-red-600'>{index} {fruits}</li>
                        })
                    }
                 </ul>
  
               </div>
              </div>
          </div>
      </div>
   </div>
    )
  
    }
 