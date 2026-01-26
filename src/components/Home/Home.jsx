import Container from '../Layout/Container'
import Logo from "../../assets/react.svg"
import HomeSub from '../HomeSub/HomeSub'

const Home = () => {
  return (
    <>
        <div className='bg-gray-900 md:pt-[180px] pt-[150px] md:pb-[80px] pb-[50px] px-3 md:px-0 text-white'>
        <Container>
            <div className='flex flex-col items-center'>
                <img src={Logo} alt="" className='md:w-[10%] w-[20%] z-[1]'/>
                <h1 className='font-semibold md:text-6xl text-4xl text-white md:mt-7 mt-5'>React</h1>
                <p className='font-semibold md:text-4xl text-3xl text-white md:mt-6 mt-4 mx-auto text-center tracking-tight'>The library for web and native user interfaces</p>
                <div className='md:mt-10 mt-8 flex md:flex-row md:items-center flex-col gap-x-5 gap-y-5 md:w-auto w-full mx-auto'>
                    <button className='bg-secondary rounded-[20px] md:py-4 py-2 md:px-15 cursor-pointer transition-all delay-100 border-[1px] border-[#646464]  md:text-2xl text-[18px] font-semibold hover:bg-transparent'>Learn React</button>
                    <button className='bg-transparent rounded-[20px] md:py-4 py-2 md:px-15 cursor-pointer transition-all delay-100 border-[1px] border-[#646464] md:text-2xl text-[18px] font-semibold hover:bg-secondary'>API Reference</button>
                </div>
            </div>
        </Container>
    </div>
        <HomeSub></HomeSub>
    </>
  )
}

export default Home