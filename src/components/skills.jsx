import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JavaScript from '../assets/images/javascript.png';
import ReactImg from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import FireBase from '../assets/images/firebase.png';
import GitHub from '../assets/images/github.png';
import Tailwind from '../assets/images/tailwind.png';
import Mongo from '../assets/images/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4  w-full h-full flex flex-col justify-center'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-secondary '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto mt-3' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto ' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;