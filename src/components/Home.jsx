import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import img from '../assets/images/elisha (1).jpg'

const Home = () => {
    return (
        
        <div name='home' className="w-full h-screen bg-primary">
            {/* Container */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-8 h-full'>
                    <div className="md:grid md:grid-cols-3 ">
                        <div className='md:col-span-2'>
                            <p className='text-[#8F1C13] font-bold'>Hi😀 my name is,</p>
                            <h1 className='text-4xl text-gray-200 font-bold py-2'>Babalola Elisha</h1>
                            <h2 className='text-4xl text-gray-400 font-bold'>I'm a Software Developer</h2>
                            <p className='text-gray-400 max-w-[700px] py-4'>I specialize in developing high-quality software applications, websites, and systems that meet user needs and exceed expectations.
                                 Check out my portfolio to see examples of my work and learn more about my skills and experience.
                            </p>
                            <div>
                                <button className='group border-2 px-6 my-2 py-3 flex items-center hover:bg-[#8F1C13] hover:border-[#8F1C13] duration-300'><Link to="work" smooth={true} duration={500} >
                                View Work
                            </Link>
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3'/>
                                </span>
                                </button></div>
                        </div>
                        <div className='flex justify-center'>
                            <img src={img} alt="" className='w-52 md:block hidden rounded-md rotate' />
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default Home