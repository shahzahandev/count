import React, { useState } from 'react'
import Container from '../Layout/Container'

const CheckBox = () => {
    const [liked, setLiked] = useState(true);

    const handleChange = (e) => {
    setLiked(e.target.checked);
  }

  return (
          <div className="bg-gray-400 pt-[120px] pb-[120px] overflow-x-hidden">
            <Container>
                <div>
                    <div className="flex justify-center items-center flex-col mt-10">
                        <p className="md:w-auto w-[300px] text-center font-semibold md:text-[24px] text-[16px]">   In this example, the text state variable holds a string. When you type, handleChange reads the latest input value from the browser input DOM element, and calls setText to update the state. This allows you to display the current text below..</p>
                        <h1 className="text-4xl font-bold text-purple-700 mt-5">Content</h1>
                        <h3 className=" text-center md:text-3xl font-semibold mt-10 mb-5 md:w-auto w-[330px]"></h3>
                        <label 
                        htmlFor=""
                        className='flex gap-x-5 text-2xl' 
                        >
                    
                          <input type="checkbox" 
                            checked={liked}
                            onChange={handleChange}
                          />
                          <h3>I liked this</h3>
                        </label>
                        <p>You {liked ? 'liked' : 'did not like'} this.</p>
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default CheckBox