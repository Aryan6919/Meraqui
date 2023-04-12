import React from 'react'
import T from '../image/whyChooseUs/Temporary.jpg'

const TempStaffing = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
        <section className='sm:mt-32 sm:flex sm:w-[90%] sm:mx-auto'>
          
              <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
                    <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>
                        <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
                            Temporary 
                            Staffing
                        </h1>
                        <p className='text-left sm:w-[98%] mt-4 sm:mt-0 font-poppins sm:text-[1.2rem] font-[300] leading-[35px]'>
                        
A temporary workforce may result in cost savings and increased production for your company. Meraqui provides dependable temporary staffing solutions that allow you to increase your staff strength without taking on full-time personnel, support overburdened employees at important moments, and keep projects going. 

                        </p>
                    </div>
              </div>
              <div className='sm:relative sm:right-[-15%] sm:w-[90%]'>
                  <img className='w-[100%] h-auto' src={T} alt="" />
              </div>
            
        </section>
        <section className='w-full my-12 sm:mt-20'>
          <div className='w-full mb-4 sm:mb-16'>
            <h2 className='text-3xl sm:text-5xl font-quicksand font-[400]'>About service</h2>
          </div> 
          <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300] sm:mt-20'>Hire quickly </h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>The Temporary Staffing procedure has eliminated the time-consuming and stressful formalities of interviewing and CV shortlisting. The emerging trend in such temporary services is direct hiring by signing a contract with a staffing agency.</p>
            </div>
            <div>
              <img src={require('../image/Temp/Hire.jpg')} alt="" />
            </div>
          </div>
          <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>  
            {/* <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '> */}
               <div className='w-full flex justify-start'> 
              {/* <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col"> */}
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300] sm:mt-20'>Work flexibility</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Candidates are free to work around their schedules. In such temporary jobs, there is no room for a demanding timetable.</p>
            </div>
            <div>
              <img src={require('../image/Temp/Work.jpg')} alt="" />
            </div>
           </div> 
          <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex-justify-left text-left'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300] sm:mt-20'>Test Drive</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Exercising an employee's abilities with certain demo services allows you to have a better understanding of the employee's productivity before hiring them permanently. Temporary staffing allows the company to monitor the person for a set amount of time before making a decision.</p>
            </div>
            <div>
              <img src={require('../image/Temp/Test.jpg')} alt="" />
            </div>
          </div>
          <div className='sm:flex sm:w-full sm:mt-12 mb-0 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300] sm:mt-16'>HOW WILL MERAQUI HELP?</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.</p>
            </div>
            <div>
              <img src={require('../image/Temp/How.jpg')} alt="" />
            </div>
          </div>
          
         
        
      </section>
      </main>
  )
}

export default TempStaffing