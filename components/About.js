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
            <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400]'>About MERAQUI</h1>
          </div>
          <div className='w-full mt-3'>
            <p className='text-left sm:w-[75%] font-poppins font-[300]'>
              We are a SaaS-enabled workforce management platform specializing in employee lifecycle management, job and requisition management, and training and interview assessments.
              <br></br> <br></br>We link our expertise with your business demands and proactively begin HR procedures to meet your needs, harnessing the power of Artificial Intelligence.
              <br></br><br></br>We have a robust pan-India presence in 23 states + 3 Union Territories and 120+ cities and are aiming to grow significantly in the times to come.
              <br></br><br></br>
            </p>
          </div>
        </div>
        <div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[-5%]'>
          <img className='rounded sm:w-[100%]' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        </div>
      </section>
      <section className='w-full my-12 '>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl font-poppins font-[300]'>Our Philosophy</h2>
        </div>
      
        <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}} className='bg-cover bg-center w-full sm:h-[55vh]'>
          <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[55vh] sm:justify-center'>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              {/* <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 '>
              Our Philosophy
              </h3> */}
            </div> 
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
                We believe that "The greatest asset of a company is its people” <br />
                 Meraqui will assist your employees to stay up-to-date with <br /> our upskilling solutions and also helps them comply with any tasks that technology and trends throw their way. Our sterling apprenticeship programs and work environment <br /> ensure employee retention. <br />
                Meraqui's mission is to assist and build an organization that people desire to be a part of. 
              </p>
            </div>
           </div>
        </div> 
      </section>
      {/* <section className='w-[95%] mx-auto my-12'> */}
        {/* <div className='w-full sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl'>Journey</h2>
        </div> */}
        {/* <div className='w-full sm:flex sm:flex-row sm:ml-16 sm:justify-center'>
          <div className='w-full mt-6 sm:w-[60%] sm:flex sm:flex-col sm:justify-between sm:h-[25vh] sm:my-auto'>
            <div className='w-full'>
              <h1 className='text-[1.4rem] sm:text-[1.6rem] text-center'>The Team</h1>
            </div> */}
            {/* <div className='w-full mt-1 sm:mt-8 sm:w-[70%]'>
              <p className='text-left sm:w-full'>
                We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence. We have a robust pan India presence in over 22 states, 55 cities, and are aiming to grow significantly in the times to come.

              </p>
            </div> */}
          {/* </div> */}
          {/* <div className='mt-2 sm:w-[60%] sm:relative sm:right-[-5%]'>
            <img className='sm:w-[100%]' src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div> */}
        {/* </div>
      </section> */}
      {/* <h1 className='text-[1.4rem] sm:text-[1.6rem] text-center'>The Team</h1> */}
      <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl font-poppins font-[300]'>The Team</h2>
        </div>
   
        <section className='bg-[white] p-8 h-fill w-[100%] font-poppins'>
        <div className=' grid  grid-cols-1 sm:grid-cols-3 sm:w-[95%] sm:ml-32 sm:mx-auto'>
          <div className='sm:flex sm:flex-col w-[100%]  mb-4 sm:mb-0'>
            
            <div className='rounded-[10px] flex justify-center  sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/LalitSir.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
      
            
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5  sm:relative sm:mb-8'>
              <div className='flex justify-center w-[88%] mx-auto rounded-[10px] bg-cyan-100 bottom-6 relative shadow-lg h-[8vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='font-poppins font-[400]' >Lalit Singh</h2>
                <p className='font-poppins font-[300]'>Co-Founder</p>
              </div>
            </div>
        
          </div>
          <div className='sm:flex sm:flex-col w-[100%] mb-4 sm:mb-0'>
            <div className='rounded-[10px] flex justify-center  sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/ShalinSir.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5  sm:relative sm:mb-8'>
              <div className='flex justify-center w-[88%] mx-auto rounded-[10px] bg-cyan-100 bottom-6 relative shadow-lg h-[8vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='font-poppins font-[400]' >Shalin Maheshwari</h2>
                <p className='font-poppins font-[300]'>Co-Founder</p>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-col w-[100%] mb-4 sm:mb-0'>
            <div className='rounded-[10px] flex justify-center  sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/AmitSir.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5  sm:relative sm:mb-8'>
              <div className='flex justify-center w-[88%] mx-auto rounded-[10px] bg-cyan-100 bottom-6 relative shadow-lg h-[8vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='font-poppins font-[400]' >Amit Duggal</h2>
                <p className='font-poppins font-[300]'>Chief Operating Officer</p>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-col w-[100%] mb-4 sm:mb-0'>
            <div className='rounded-[10px] flex justify-center  sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/AnisSir.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5 sm:relative sm:mb-8'>
              <div className='flex justify-center w-[88%] mx-auto rounded-[10px]  bg-cyan-100 bottom-6 relative shadow-lg h-[8vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='font-poppins font-[400]' >Anis Kazi</h2>
                <p className='font-poppins font-[300]'>CBO-Logistics & Ecommerce</p>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-col w-[100%] mb-4 sm:mb-0'>
            <div className='rounded-[10px] flex justify-center sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/SandeepSir.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5  sm:relative sm:mb-8'>
              <div className='flex justify-center w-[88%] mx-auto rounded-[10px] bg-cyan-100 bottom-6 relative shadow-lg h-[8vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='font-poppins font-[400]'>Sandeep Shevale</h2>
                <p className='font-poppins font-[300]'>CBO- Manufacturing</p>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-col w-[100%] mb-4 sm:mb-0'>
            <div className='rounded-[10px] flex justify-center  sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/ChiranjeevJha.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5  sm:relative sm:mb-8'>
              <div className='flex justify-center w-[88%] mx-auto rounded-[10px] bg-cyan-100 bottom-6 relative shadow-lg h-[10vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='font-poppins font-[400]'>Chiranjeev Jha</h2>
                <p className='px-[2px] font-poppins font-[300]'>Business Head- Frontline Staffing</p>
              </div>
            </div>
          </div>
          <div className='sm:flex sm:flex-col w-[100%] mb-4 sm:mb-0'>
            <div className='rounded-[10px] flex justify-center  sm:w-[68%] sm:rounded-[10px] sm:h-[30vh] sm:flex sm:justify-center'>
              <img src={require('../image/img/SachinChavan.jpg')} className="p-2 w-[60%] sm:p-2 sm:w-[70%] sm:h-fill" alt="" />
            </div>
            <div className='sm:flex w-[100%]  sm:w-[68%] sm:bottom-5  sm:relative sm:mb-8'>
              <div className=' flex justify-center w-[88%] mx-auto rounded-[10px] bg-cyan-100 bottom-6 relative shadow-lg h-[10vh] flex-col sm:mx-auto bg-white sm:shadow-sm sm:w-[88%] sm:h-[15vh] sm:flex sm:justify-center sm:flex-col sm:rounded-[10px] sm:relative '>
                <h2 className='  ' >Sachin Chavan</h2>
                <p className=''>National Head- Recruitment Services</p>
              </div>
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
