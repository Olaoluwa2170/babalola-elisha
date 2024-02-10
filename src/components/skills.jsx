
import {SkillLists} from "../constants/skils"

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4  w-full h-full flex flex-col justify-center'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-secondary '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8'>
              {
                SkillLists.map((skill, i) => {return (
                    <div key={i} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-10 mx-auto mt-3' src={skill.src} alt="HTML icon" />
                        <p className='my-4'>{skill.name}</p>
                    </div>
                )})
              }
          </div>
      </div>
    </div>
  );
};

export default Skills;