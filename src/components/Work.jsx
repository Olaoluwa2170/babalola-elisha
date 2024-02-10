import engr from '../assets/images/projectABUAD.png'
import alien from '../assets/images/alienInvasion.png'
import stack from '../assets/images/the-stack.png'
import website from '../assets/images/social-app.png'

const Work = () => {
    return (
      <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4  w-full flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-secondary '>Works</p>
                <p className='py-4'>Check out some of my works</p>
            </div>

            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 "> 
            {/* grid items */}
                <div style={{backgroundImage:`url(${website})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                                Social Media App with <br/> React Js Application
                        </span>
                        <div className="pt-8 text-center">
                                <a target='_blank' href="https://pictorial-ten.vercel.app/" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                            Demo
                                    </button>
                                </a>
                                <a  href="https://github.com/Olaoluwa2170/BE_Pictorial" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Code
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>

                {/* grid items */}
                <div style={{backgroundImage:`url(${stack})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                                React Js Application
                        </span>
                        <div className="pt-8 text-center">
                                <a target='_blank' href="https://olaoluwa2170.github.io/the-stack/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                            Demo
                                    </button>
                                </a>
                                <a target='_blank' href="https://github.com/Olaoluwa2170/the-stack">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Code
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>

               
                
                {/* grid items */}
                <div style={{backgroundImage:`url(${alien})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                                Alien Invasion Game <br/> With Python
                        </span>
                        <div className="pt-8 text-center">
                                <a target='_blank' href="https://github.com/Olaoluwa2170/alien_invasion">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Code
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>
                {/* grid items */}
                <div style={{backgroundImage:`url(${engr})`}} 
                className="shadow-lg shadow-primary group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                                University of <br/> ABUAD(LAW) <br/> Demo site with React Js
                        </span>
                        <div className="pt-8 text-center">
                                <a target='_blank' href="https://olaoluwa2170.github.io/Abuad-Law/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large' >
                                            Demo
                                    </button>
                                </a>
                                <a target='_blank' href="https://github.com/Olaoluwa2170/Abuad-SEET">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>
                                            Code
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        </div>
            )}

export default Work


