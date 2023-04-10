import React from 'react';
// import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
// import {MdOutlineMailOutline} from 'react-icons/md';
// import {FiPhoneCall} from 'react-icons/fi';

const About = () => {

  return (
    <main className='w-full sm:mt-24 ' id='about'>
      <section className='w-[95%] sm:flex sm:flex-row  h-fill my-8 mx-auto h-fill sm:mb-16'>
        <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center'>
          <div className='w-full sm:mb-8'>
            <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2'>About Meraqui</h1>
          </div>
          <div className='w-full mt-3'>
            <p className='text-left sm:w-[75%] font-poppins font-[300] sm:text-[1.2rem] leading-[35px]'>
              We are a SaaS-enabled workforce management platform specializing in employee lifecycle management, job and requisition management, and training and interview assessments.
              We link our expertise with your business demands and proactively begin HR procedures to meet your needs, harnessing the power of Artificial Intelligence.
              We have a robust pan-India presence in 23 states + 3 Union Territories and 120+ cities and are aiming to grow significantly in the times to come.
              
            </p>
          </div>
        </div>
        <div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[-5%]'>
          <img className=' sm:w-[100%]' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        </div>
      </section>
      <section className='w-full my-12 '>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl font-poppins font-[300] text-center'>Our Philosophy</h2>
        </div>

        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" }} className='bg-cover bg-center w-full sm:h-[45vh]'>
          <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[45vh] sm:justify-center'>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              {/* <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 '>
              Our Philosophy
              </h3> */}
            </div>
            <div className='w-[95%] sm:w-[89%]  my-4'>
              <p className='text-center sm:w-[85%] font-poppins font-[300] line-spacing-[1.5] sm:ml-40 sm:mr-20'>
                We believe that "The greatest asset of a company is its people” 
                <br></br>
                <br></br>
            
                
                Meraqui will assist your employees to stay up-to-date with  our upskilling solutions <br></br><br></br>It also helps them comply with any tasks that technology and trends throw their way. <br></br>
                <br></br>
                Meraqui's mission is to assist and build an organization that people desire to be a part of.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='w-full mb-4 sm:mb-16'>
        <h2 className='text-3xl sm:text-5xl font-poppins font-[300]'>The Team</h2>
      </div>
      <section className='w-full sm:w-[100%] sm:mx-auto sm:mb-20 mb-4'>
        <div className=' staff sm:w-[90%] gap-3 sm:grid flex flex-col sm:ml-auto items-center'>
          <div className='flex flex-col   w-[90%]'>
           <a href="	https://www.linkedin.com/in/lalit-singh-11a303a/
" ><img className='sm:w-[100%]' src={require('../image/staff/lalit.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Lalit Singh</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Founder CEO</p>
            </div>
          </div>
      
<div className='flex flex-col  w-[90%]'> 
            <a href="https://www.linkedin.com/in/shalin-maheshwari-aa2ba4226/
"><img className='sm:w-[100%]' src={require('../image/staff/shalin.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Shalin Maheshwari</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Co-founder</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/shaily-maheshwari-kajaria-3b3b8139/
 "><img className='sm:w-[100%]' src={require('../image/staff/shaily.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Shaili Kajaria</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Advisor</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/amit-duggal-57296043/
"><img className='sm:w-[100%]' src={require('../image/staff/amit.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Amit Duggal</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Chief Operating Officer</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/aniskazi1787/
"><img className='sm:w-[100%]' src={require('../image/staff/anis.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Anis Kazi</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>CBO-Logistics & Ecommerce</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/sandeep-shevale/
"><img className='sm:w-[100%]' src={require('../image/staff/sandeep.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Sandeep Shevale</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>CBO- Manufacturing</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/chiranjeev-jha-53370b35/
 "><img className='sm:w-[100%]' src={require('../image/staff/chiranjeev.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Chiranjeev Jha</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Business Head- Frontline Staffing</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/sachin-chavan-00060724/
 "><img className='sm:w-[100%]' src={require('../image/staff/sachin.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Sachin Chavan</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>National Head- Recruitment Services</p>
            </div>
          </div>
          {/* <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/shaily-maheshwari-kajaria-3b3b8139/
 "><img className='sm:w-[100%]' src={require('../image/staff/shaily.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Shaily Maheshwari</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Advisor</p>
            </div>
          </div> */}
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/sudarshan-jadwal-66509068/
 "><img className='sm:w-[100%]' src={require('../image/staff/sudarshan.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Sudarshan Jadwal</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Business Head - Gig Works</p>
            </div>
          </div>
          <div className='flex flex-col   w-[90%]'>
            <a href="https://www.linkedin.com/in/ajay-jha-b3a95264/
 "><img className='sm:w-[100%]' src={require('../image/staff/ajay.jpg')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Ajay Jha</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Regional Business Head - North</p>
            </div>
          </div><div className='flex flex-col   w-[90%]'>
           <a href="https://www.linkedin.com/in/siva-kumar-8b3b62110/
 "> <img className='sm:w-[100%]' src={require('../image/staff/siva.jpg')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Sivakumar P</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Regional Business Head - South</p>
            </div>
          </div><div className='flex flex-col   w-[90%]'>
            <a href=" https://www.linkedin.com/in/anil-prajapati-41ba8bb7/
"><img className='sm:w-[100%]' src={require('../image/staff/anil.jpg')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Anil Prajapati</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Regional Business Head - West</p>
            </div>
          </div>


        </div>
      </section>

      {/* <div className='flex flex-col my-8 font-normal sm:w-[65%] sm:mx-auto sm:flex-row'>
          <div className='flex flex-row justify-center w-full '>
            <MdOutlineMailOutline className='mr-2 text-right sm:text-4xl  text-2xl text-[#1ABDDC]'/>
            <a className='sm:text-xl' href="mailto:support.meraqui@gmail.com">contact@meraqui.com</a>
          </div>
          <div className='flex flex-row justify-center w-[71%] mt-2 sm:w-[93%]'>
            <FiPhoneCall className='text-2xl mr-2 text-[#1ABDDC] sm:text-4xl'/>
            <a className='sm:text-xl' href="#mobile">+91 95607 72719</a>
          </div>
        </div> */}
      {/* </section> */}
    </main>
  )
}

export default About
