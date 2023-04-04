const About = () => {
    return(
        <div name='about' className="w-full h-screen bg-primary text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 px-4 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-3xl font-bold inline border-b-4 border-secondary">ABOUT</p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-4 gap-8">
                        <div>
                            <p className="sm:text-right text-3xl font-bold">
                                Hi I'm Elisha Nice to meet you please take a look around
                            </p>
                        </div>
                    <div className="">
                        <p>
                        I'm passionate about building excellent software that solves real-world problems and makes a positive impact on people's lives. As a skilled software developer with expertise in programming languages such as [list your relevant languages], I specialize in designing, developing, and maintaining high-quality applications, websites, and systems. Check out my portfolio to see examples of my work and learn more about my skills and experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About