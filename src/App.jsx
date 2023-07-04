
import './App.css'

import Section from './components/Section'

function App() {

    return (
        <div className='relative h-[100%] bg-[#E2E1DF] '>
            <div className="flex gap-x-[20px] h-[60px] items-center p-[10px] bg-slate-700 opacity-60 text-white absolute   top-0 left-0 w-[100%] z-20 " >
                <a href="#home">Home</a>
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className='h-[100vh] overflow-y-scroll '>
                <Section id="home" >
                        <h1 className='text-[52px] font-bold '>I am Mithreshvar </h1>
                        <h2 className='text-[32px] '>Full Stack Developer</h2>
                </Section>
                <Section id="about" >
                    <div>
                        <h1 className='text-[52px] font-bold '>About Me</h1>
                        <div>
                            <div className='rounded-[30px] ml-[200px] mt-[30px] bg-gradient-radial to-[#d6d6cc] via-white from-white p-[5px] w-[610px]   '>
                                <p className='text-[22px] p-[30px] w-[600px]  rounded-[25px] bg-[rgb(256,256,256,.5)] '> Hello, I am currently pursuing BE in Computer Engineering from Sri Eshwar college of Engineering. I am an enthusiastic coder and love problem solving. I am a pre-final year student exploring the web development and have a great interest in it  .</p>
                            </div>
                        </div>
                    </div>
                </Section>
                <div id="projects"  className=' p-[80px] ' >
                    <h1 className='text-[52px] font-bold '>Projects</h1>
                    <div className='flex flex-col gap-y-[10px] pl-[20px] '>
                        <div>
                            <h1 className='text-[32px] hover:text-[#2246C9] '><a href='https://www.fundsindia.com/cagr-calculator'>FundsIndia Internship</a></h1>
                            <p className='text-[22px] pl-[20px] '>My first inten on front end web development with Next.js and tailwind. We, as a team, have been indulged to create commercial and financial calculators that are used by the customers of FundsIndia. It was the first time working on a live project and we faced many hurdles as resolving the environment configurations and collabrating within ourselves using git. And I am also proud to say that I have managed my team members as a team lead. </p>
                        </div>
                        <div>
                            <h1 className='text-[32px] hover:text-[#2246C9] '><a href='https://github.com/mithreshvar/hospital-management'>Hospital Management System</a></h1>
                            <p className='text-[22px] pl-[20px] '>MERN stack application that is usefull for our college medical center to manage the incoming and outgoing of students. It also keeps tracks on the students medical records which will be use full for teachers to provide medical leaves.</p>
                        </div>
                        <div>
                            <h1 className='text-[32px] hover:text-[#2246C9] '><a href='https://github.com/mithreshvar/protube'>Protube</a></h1>
                            <p className='text-[22px] pl-[20px] '>This application is an implimentaion of machine learning which generates summary of YouTube videos. I take care the building web app and my colleagues are modelling the AI. This project is currently under development.</p>
                        </div>
                    </div>
                </div>
                <div id="contact" className=' bg-gradient-to-b pt-[150px] p-[80px] pb-[50px] from-[#E2E1DF] via-[#7a7368] to-[#41382b] text-[rgb(255,252,244)] flex  gap-x-[28px] ' >
                    <h1 className='text-[52px] font-bold '>Contact</h1>
                    <div className='p-[20px] text-[22px] '>
                        <p>Email : <a href="mailto:mithreshvar@gmail.com" target="_top">mithreshvar@gmail.com</a></p>
                        <p>Phone : 9385809221 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
