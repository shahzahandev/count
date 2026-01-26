import React from 'react'
import Container from '../Layout/Container'

const HomeSub = () => {
  return (
    <div className='bg-gray-800 md:pt-[50px] pt-[20px] md:pb-[50px] pb-[20px] px-3 md:px-0 text-white'>
        <Container>
            <div className='flex flex-col items-center'>
                 <p className='font-semibold md:text-5xl text-3xl text-white md:mt-7 mt-5 text-center md:w-[580px]'>Create user interfaces from components</p>
                 <p className='text-white font-semibold md:text-[22px] md:leading-9 leading-6 text-center md:mt-10 mt-4 md:w-[800px]'>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
            </div>
        </Container>
    </div>
  )
}

export default HomeSub