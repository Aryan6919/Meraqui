import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {BiMapAlt} from 'react-icons/bi';
// import { BiConversation } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../App.css'

const Footer = () => {
  return (
    <footer className=' bg-cyan-100 w-[100%] h-fill pb-2 sm:pb-12 flex flex-col  sm:pt-8 sm:h-[95vh] font-poppins '>
         <div className='flex flex-col sm:flex-row sm:w-[80%]  sm:mx-auto sm:justify-center sm:mb-8 sm:pb-8'> 
            <div className='w-full sm:flex sm:flex-row sm:justify-around sm:w-[53%]'>
                <div className=' flex flex-col w-full sm:w-[100%] sm:justify-between sm:h-[35vh] sm:text-left'>
                    <div className='w-[80%] ml-[20px]  flex justify-start mt-4 sm:w-[65%] '>
                        <img className='   w-[60%] flex justify-center sm:w-[50%]' src={require('../image/logo.png')} alt="" />
                    </div>
                    <div className='flex flex-row justify-center w-full mt-4 sm:w-[66%] sm:mt-8 px-4'>
                        <span className='sm:w-[15%] text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill'><BiMapAlt/></span>
                        <p className=" max-w-full sm:w-[75%] text-left sm:leading-[1.8] font-poppins font-[400]  sm:flex sm:justify-center sm:flex-col">
                            Meraqui Ventures Pvt. Ltd., 
                            Pranik Chambers, B-125, 1st Floor, Saki Vihar Road, Near Saki Naka Metro Station,
                            Sakinaka, Andheri (E), Mumbai – 400072, India<br />
                        
                        </p>
                    </div>
                    {/* <div className='text-left w-[93%]'> */}
                    <div className='flex flex-row justify-start w-full mt-4 sm:w-[66%] sm:mt-12 px-4'>
                        <span className='sm:w-[15%] text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill p-1px'><BiPhoneCall/></span>
                        <p className=" max-w-full sm:w-[75%] text-left sm:leading-[1.8] font-poppins font-[400]  sm:flex sm:justify-center sm:flex-col">+91-9560772719</p>
                    </div>
                    {/* <div className='flex flex-row justify-center w-full sm:w-[100%] sm:mt-4 mt-4 relative left-[-14%] sm:left-0'> */}
                    <div className='flex flex-row justify-start w-full mt-4 sm:w-[66%] sm:mt-12 px-4'>
                        <span className='sm:w-[15%] text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill'><AiTwotoneMail/></span>
                        <p className=" max-w-full sm:w-[75%] text-left sm:leading-[1.8] font-poppins font-[400]  sm:flex sm:justify-center sm:flex-col">contact@meraqui.com</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row mt-8 justify-evenly   sm:w-[85%] sm:mt-12'>
                <div className='w-[30%] '>
                    <div className='w-[100%] text-[0.85rem] sm:w-[60%] sm:flex sm:flex-col sm:justify-center' >
                        <h3 className='w-fit ml-4  border-b-[3px] border-cyan-500 sm:text-[1.3rem] font-poppins font-[400]'>Quick Links</h3>
                        <ul className="items-center mt-[20px] flex flex-col justify-evenly h-40 font-poppins font-[300]  sm:text-left sm:ml-4">
                            <li ><Link to="/services">Services</Link></li>
                            <li><Link to="/engine">karam.ai</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[33%]'>
                    <div className='w-[100%] sm:w-[60%] sm:flex sm:flex-col sm:justify-center text-[0.85rem] ' >
                        <div className='ml-4 border-b-[3px] border-cyan-500 w-[75%]'>
                            <h3 className='w-fit ml-4   sm:text-[1.3rem] font-poppins font-[400]'>Services</h3>
                        </div>
                        <ul className= "w-80%] font-poppins font-[300]  mt-[36px]  flex flex-col justify-start h-40   sm:text-left sm:ml-4 sm:mt-[38px] ">
                            <li className='sm:mb-[25px]   mb-[30px]'><Link to="/services/tempStaff">TEMP-STAFFING</Link></li>
                            <li className='sm:mb-[25px]  mb-[30px]'><Link to="/services/neemNaps">NAPS</Link></li>
                            <li className='sm:mb-[25px]  mb-[30px]'><Link to="/services/permStaffing">PERM-STAFFING</Link></li>
                            
                        </ul>
                    </div>
                </div>

                <div className='w-[30%]'>
                    <div className='w-[100%] sm:w-[60%] sm:flex sm:flex-col sm:justify-center text-[0.85rem]' >
                        <div className='ml-2 flex justify-center  border-b-[3px] border-cyan-500 w-[75%]'>
                            <h3 className='w-fit  sm:mr-2   sm:text-[1.3rem] font-poppins font-[400]'>Services</h3>
                        </div>
                        <ul className="text-[0.8rem] mt-[35px] flex flex-col  font-poppins font-[300]  sm:text-left sm:ml-4 sm:h-[24vh] sm:mt-[40px]">
                        <li className='sm:mb-[25px] mb-[30px]'><Link to="/services/neemNaps">NATS</Link></li>
                            <li className='sm:mb-4 mb-[30px]' ><Link to="/services/warehousing">3PL WAREHOUSING</Link></li>
                            <li className='sm:mb-4 mb-[30px]'><Link to="/services/workforce">GIG</Link></li>
                        
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
            <div className='w-full sm:mt-16 mt-16'>
                <h2 className='text-4xl font-poppins font-[300]  sm:mb-14 '>Follow our socials</h2>
            </div>
            <div className=' flex flex-row w-full justify-between mt-2  sm:w-[60%] sm:mx-auto'>
                <div className="ml-8">
                    <a href='https://www.instagram.com/meraqui_solutions/' target="blank"> <BsInstagram className='text-[4rem] w-[60%] text-cyan-400'/></a>
                </div>
                <div className="">
                    <a href='https://www.facebook.com/meraquisolutions' target="blank"><BsFacebook className='text-[4rem] w-[60%] text-cyan-400'/></a>
                </div>
                <div className="">
                    <a href=' https://www.linkedin.com/company/meraquii' target='blank'><FaLinkedin className='text-[4rem] w-[60%] text-cyan-400' /></a>
                </div>
                <div className="">
                    <a href='https://www.linkedin.com/company/meraquii' target='blank'><BsTwitter className='text-[4rem] w-[60%] text-cyan-400'/></a>
                </div>
            </div> 
            
            
            
            <div className=  'my-4 sm:my-8  flex flex-row w-full justify-evenly   sm:w-[60%] sm:mx-auto  font-poppins font-[300]' >©Copyright 2022@MERAQUI</div>
        
        {/* <div><li className='sm:mb-[25px] mb-[30px]'>© @meraqui.com</li></div> */}
        {/* <p>&copy;@Meraqui.com</p> */}
    </footer>
  )
}

export default Footer