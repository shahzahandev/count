import React from 'react'

const CheckBox = () => {
  return (
    <div className="bg-gray-300 pt-[150px] pb-[180px]">
        <div className="flex justify-center items-center flex-col mt-10">
          <h1>do this</h1>
          <label htmlFor=""
          className='flex gap-x-2'
          >
            <input 
            type="text"
            type="checkbox" 
            />
           <h3> Do you like this.</h3>
          </label>
        </div>
    </div>
  )
}

export default CheckBox