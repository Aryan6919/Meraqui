import React from 'react'
import T from '../image/whyChooseUs/Temporary.png'

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
                        <p className='text-left sm:w-[98%] mt-4 sm:mt-0 font-poppins font-[300]'>
                        {/* Temporary staffing in India has shown to be one of the greatest business options in the market over time. Here are a few benefits of employing temp staffing services.
                        Hire quickly - The Temporary Staffing procedure has eliminated the time-consuming and stressful formalities of interviewing and CV shortlisting. The emerging trend in such temporary services is direct hiring by signing a contract with a staffing agency.

Work flexibility - Candidates are free to work around their schedules. In such temporary jobs, there is no room for a demanding timetable. */}
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
          <h2 className='text-3xl sm:text-4xl font-quicksand font-[400]'>About service</h2>
        </div> 
      
         <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"}} className='bg-cover bg-center w-full sm:h-[100vh]'>
          <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[100vh] sm:justify-center'>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
            {/* <h2 className='text-3xl sm:text-4xl font-quicksand font-[400]'>About service</h2>
            <br></br> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className='text-left sm:w-[85%] font-poppins font-[300]'>
            Temporary staffing in India has shown to be one of the greatest business options in the market over time. Here are a few benefits of employing temp staffing services
            </p>
            <br></br>
              <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 font-poppins font-[300]'>
                Hire Quickly
              
              </h3>
              <br></br>
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
              The Temporary Staffing procedure has eliminated the time-consuming and stressful formalities of interviewing and CV shortlisting. The emerging trend in such temporary services is direct hiring by signing a contract with a staffing agency.
            </p>
            <br></br>
            <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 font-poppins font-[300]'>
              Work Flexibility
              
              </h3>
              <br></br>
        
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
              Candidates are free to work around their schedules. In such temporary jobs, there is no room for a demanding timetable.


              
            </p>
            
            <br></br>
            <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 font-poppins font-[300]'>
            Test Drive
              
              </h3>
              <br></br>
        
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
              Exercising an employee's abilities with certain demo services allows you to have a better understanding of the employee's productivity before hiring them permanently. Temporary staffing allows the company to monitor the person for a set amount of time before making a decision.


              
            </p>
            
            <br></br>
            <br></br>
            <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 font-poppins font-[300]'>
            HOW WILL MERAQUI HELP?
              
              </h3>
              <br></br>
        
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
              Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.


              
            </p>
            
            <br></br>

            {/* <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 font-poppins font-[300]'>
              Test Drive
              
              </h3>
              <br></br>
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
              Exercising an employee's abilities with certain demo services allows you to have a better understanding of the employee's productivity before hiring them permanently
            </p>
            </p> */}
            <br></br>



            </div>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              {/* <p className='text-left sm:w-[85%] font-poppins font-[300]'>
            
              Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.
              </p> */}
            </div>
          </div>
          </div>
        
      </section>
      </main>
  )
}

export default TempStaffing