import { useSetAtom } from 'jotai';
import React, { useEffect, useState, useRef } from 'react'
// import {BsFillQuestionCircleFill} from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { videoIndexAtom } from '../hooks/store';





const MEngine = () => {

    const [currentVideo, setCurrentVideo] = useState(0);
    const [onHover, setOnHover] = useState(false);
    const navigate = useNavigate();
    const setVideoIndex = useSetAtom(videoIndexAtom);
    const intervalId = useRef(null);

    const handleButtonClick = (index) => {
        setCurrentVideo(index);
        clearInterval(intervalId.current);
        intervalId.current = setInterval(
            () => setCurrentVideo((currentVideo) => (currentVideo + 1) % content.length),
            10000
        );
    };

    const handleVideoClick = () => {
        clearInterval(intervalId.current);
        setVideoIndex(currentVideo);
        navigate('/engine/video')
    };

    const handleVideoHoverIn = () => {
        setOnHover(true)
        clearInterval(intervalId.current);
        document.querySelector("#video").pause();
    };

    const handleVideoHoverOut = () => {
        setOnHover(false)
            document.querySelector("#video").play();
            intervalId.current = setInterval(
                () =>
                setCurrentVideo((currentVideo) => (currentVideo + 1) % content.length),
                10000
                );
    };

    useEffect(() => {
        intervalId.current = setInterval(
            () => {
                setCurrentVideo((currentVideo) => (currentVideo + 1) % content.length);
                console.log("currentVideo", currentVideo);
            },
            10000
        );

        return () => clearInterval(intervalId.current);
    }, []);


    const content = [
        {
            header1: "Recruitment",
            header2: "at Scale",
            body: "karam.ai allows employers to hire workers in large volumes in a number of industries across India.",
            para1: " Reduce dependence on hundreds of recruitment vendorsReducing sourcing costs & turnaround times by up to 30%",
            para2: " Reduce dependence on hundreds of recruitment vendors",
            img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            url: "../image/whyChooseUs/CHAT.mp4",
        },
        {
            header1: "AUTOMATED",
            header2: "CONTACTLESS ONBOARDING",
            body: "The karam.ai enables KYC data collection, UAN no. creation, ESIC registration, Appointment letter generations & self onboarding of candidates in large volumes across the country.",
            para1: " Reducing backend team cost and turnaround times by up to 45%",
            para2: " Assembles all data in a single dashboard to get organizational analytics.",
            img: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            url: "../image/whyChooseUs/ONBOARDING.mp4",
        },
        {
            header1: "AUTOMATED",
            header2: "PAYROLL",
            body: "The karam.ai gathers attendance data, fills it as per policy rules and creates payroll sheet as per organizational needs",
            para1: " Reducing processing time by more than 50%",
            para2: " Uploads data onto HRMS for advanced insights into the organization",
            img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            url: "../image/whyChooseUs/PAYROLL.mp4",
        },
        {
            header1: "DIGITAL",
            header2: "COMPLIANCE MANAGEMENT",
            body: "The karam.ai assembles all compliance data and assists with timely filling of all statutory compliances with minimal human intervention.",
            para1: " Minimizes time needed to generate UAN, ESIC Number and all other essential compliances by 70%",
            para2: "Reduces dependency on external vendors for compliance and also helps audit compliances performed by outsourced vendors",
            img: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            url: "../image/whyChooseUs/COMPLIANCE.mp4",
        },
    ]

    // console.log(content[originalIndex].url);

    return (
        <main className='w-[95%] sm:w-[100%] mx-auto sm:mx-auto h-fill my-12 sm:mt-32' id='#engine'>
            <section className='w-[95%] mx-auto mt-6 sm:mt-32 font-poppins font-[300]'>
                <h2 className=' text-center text-4xl sm:text-5xl font-quicksand font-[400] w-full sm:text-center sm:ml-2 mb-14'>
                    Karma.ai
                </h2>
                <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
                    <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
                        <div className='w-full text-left sm:w-[100%]'>
                            <h3 className='text-2xl sm:text-3xl font-quicksand font-medium'>karam.ai</h3>
                        </div>
                        <div className='w-full mt-2 sm:w-[70%] sm:mt-8'>
                            <p className='text-left sm:w-full sm:text-[1.2rem]'>
                                karam.ai is an Al-based companion who uses chat bot functionality to interact with candidates and employers.
                                He doesn’t generate just leads or qualified leads. He runs his proprietary match logic to zero in on the most suitable candidates.
                                His Background verification engine ensures that only verified candidates get on-boarded.
                            </p>
                        </div>

                    </div>
                    <div className='mt-4 sm:w-[60%] sm:relative sm:right-[-10%]'>
                        <img className=' sm:w-[100%] ' src={"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
                    </div>
                </div>

            </section>
            <section className='flex flex-col w-full mt-8 sm:mt-0 font-poppins font-[300]'>
                <div className='w-full ml-4 '>
                    <h2 className='text-4xl mt-16 font-quicksand font-[400]  w-full text-left sm:w-[100%] sm:text-center sm:text-4xl'>About karam.ai</h2>
                </div>
                <div className='w-full  mt-4 sm:mt-12 flex flex-col justify-center align-center'>
                    <p className='font-quicksand font-[400] text-left w-[95%] mx-auto sm:text-[1.2rem] pl-7 mt-2'>
                        With user-friendly On-boarding engine, karam.ai helps them with seamless self- onboarding. karam.ai’s role doesn’t end with hiring a candidate.
                    </p>
                    <p className='font-quicksand font-[400] text-left w-[95%] mx-auto sm:text-[1.2rem] pl-7 mt-2'>
                        He works tirelessly to record their daily attendance with a single motto: Candidates’ salary must get credited on time along with compliance.Every month. Flawlessly.
                    </p>
                    <p className='font-quicksand font-[400] text-left w-[95%] mx-auto sm:text-[1.2rem] pl-7 mt-2'>
                        karam.ai comes handy in their times of dire need of money. He extends them salary advance, loans apart from their rightful cover under statutory dues and/or other insurance packages.
                    </p>
                    <p className='font-quicksand font-[400] text-left w-[95%] mx-auto sm:text-[1.2rem] pl-7 mt-2'>
                        karam.ai tracks a candidate’s life cycle from hire to retire and becomes organizations go-to person to solve daily HR needs.
                    </p>

                </div>
            </section>
            <section className='flex flex-col w-full mt-8 font-poppins font-[300] sm:w-[95%] sm:mx-auto'>
                <div className='w-full'>
                    <br></br>
                    <h2 className='font-[400] font-quicksand text-[1.8rem] sm:text-4xl px-1'>Why you'll love karam.ai</h2>
                </div>
                <div className='sm:flex sm:flex-row duration-500'>

                    <div className='  w-full sm:w-[100%] sm:mt-16 flex flex-col sm:h-[65vh] mt-4 sm:justify-between'>
                        <div className='sm:min-h-[62vh] '>
                            <div className='w-full text-left text-2xl ml-4  sm:mb-8 sm:text-4xl'>
                                <h3 className=''>{content[currentVideo].header1} <span className='text-cyan-300 duration-500'>{content[currentVideo].header2}</span></h3>
                            </div>
                            <div className='w-full mt-2 sm:mb-8'>
                                <p className='ml-4  text-left'>
                                    {content[currentVideo].body}
                                </p>
                            </div>
                            <div className='w-full flex flex-row justify-evenly mt-2 sm:mb-8 sm:text-[1.1rem]'>
                                <span className=' ml-4 w-[10%] text-2xl mt-1'><BsFillArrowRightCircleFill className='text-cyan-400 sm:text-[2rem] sm:relative sm:bottom-[15%]' /></span>
                                <p className='w-[90%] text-left'>{content[currentVideo].para1}</p>
                            </div>
                            <div className='w-full flex flex-row justify-evenly sm:text-[1.1rem]'>
                                <span className=' ml-4 w-[10%] text-2xl sm:text-3xl mt-1'><BsFillArrowRightCircleFill className='text-cyan-400 sm:text-[2rem] sm:relative sm:bottom-[15%]' /></span>
                                <p className='w-[90%] text-left'>{content[currentVideo].para2}</p>
                            </div>
                        </div>
                        <div className='hidden sm:w-[92%] my-auto sm:mx-auto sm:h-[6vh]  sm:flex sm:flex-row sm:justify-center duration-500'>
                            {content.map((video, index) => (
                                <button
                                    key={index}
                                    style={index === currentVideo ? { height: "6px", marginBottom: "5px", width: "25%" } : null}
                                    onClick={() => handleButtonClick(index)}
                                    className='outline-none duration-300 before:font-semibold before:text-[0.8rem] before:relative before:w-[100%] before:text-left  w-[25%] flex flex-row justify-center bg-cyan-400 h-[1.5px] '>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='rounded-sm sm:w-[100%] w-[100%]   h-[60vh] mx-auto sm:relative sm:right-[-10%] sm:mt-8 mt-8'>
                        <video
                            id="video"
                            src={currentVideo === 0 && require("../image/whyChooseUs/CHAT.mp4") || currentVideo === 1 && require("../image/whyChooseUs/ONBOARDING.mp4") || currentVideo === 2 && require("../image/whyChooseUs/PAYROLL.mp4") || currentVideo === 3 && require("../image/whyChooseUs/COMPLIANCE.mp4")}
                            autoPlay
                            muted
                            loop
                            className='lg:w-[90%] sm:w-[100%] h-[65vh] pr-7'
                            style={{ width: "20rem", height: "20rem", border: onHover? "4px solid #00FFFF": "" }}
                            onClick={handleVideoClick}
                            onMouseEnter={handleVideoHoverIn}
                            onMouseLeave={handleVideoHoverOut}
                        ></video>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MEngine
