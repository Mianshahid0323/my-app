import React from 'react'

export default function Events() {
    const handlesubmit = ()=>{
        alert("Button is working")
    }
    return (
        <div className='py-20 bg-orange-800'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='text-center text-2xl' >
                        This is our Event Section
                    </h1>
                    <div className='btn bg-orange-500 text-center'>
                        <form>
                            <input type='text' className='form-control' placeholder='Enter your text' />
                        <button onClick={handlesubmit}> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
      )
    
      }

