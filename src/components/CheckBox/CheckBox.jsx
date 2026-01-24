import React, { useState } from 'react'
import Container from '../Layout/Container'
import exam4 from "../../assets/useStateExam4.png"

const CheckBox = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  }

  return (
    <div className="bg-gray-900 pt-[10px] pb-[50px] overflow-x-hidden px-3 md:px-0">
      <Container>
        <div>
          <div className="">
            <h2 className='text-third font-bold md:text-2xl md:mt-5 mt-2'>Basic useState examples</h2>
            <h3 className='text-white/60 font-bold md:text-[20px]'>Example 4 of 4: Checkbox (boolean) </h3>
            <p className='text-white font-semibold md:text-[20px] md:mt-5 mt-2 md:leading-9 leading-7'>In this example, the liked state variable holds a boolean. When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked. The liked variable is used to render the text below the checkbox.</p>
            <h3 className=" text-center md:text-3xl font-semibold mt-10 mb-5 md:w-auto w-[330px]"></h3>
            <img src={exam4} alt="" className="md:w-[60%] w-full mt-5 rounded-[20px] shadow-gray-800 shadow-2xl" />
            <div className='text-black bg-white py-2 text-center mt-5 md:mt-6 rounded-[15px]'>
              <label
                htmlFor=""
                className=''
              >
                <input type="checkbox"
                  checked={liked}
                  onChange={handleChange}
                />
                <h3 className="md:text-[24px] font-semibold">I liked this</h3>
              </label>
              <p className="md:text-2xl font-bold text-third"> You {liked ? 'liked' : 'did not like'} this.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CheckBox