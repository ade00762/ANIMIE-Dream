import './App.css'
import Basics from './basics'
import {Link} from 'react-router-dom'
// import Courses from '/Courses'

function Component () { const courses = [
    {
        name: 'Front-End',
        price: 60000,
        duration: '2 months',
        details: 'Learn web fundamentals, build clean interfaces, and properly version your code. Gain indepth knowledge of HTML5, CSS3, ES6+, React, Git, Github, and traspilers.',
    },
    {
        name: 'Back-End',
        price: 65000,
        duration: '2 months',
        details: `Learn how to build an efficient, scalable, and robust back end infrastructure to power organization's need. Learn how to create secure and irresitible API's.`,
    },
    {
        name: 'Mobile App',
        price: 80000,
        duration: '3 months',
        details: `Learn how to build cross platform mobile apps . This course will focus on Flutter (Dart), and React Native (Javascript), how to setup Android Studio, and deploy to app stores.`,
    },
    {
        name: 'Blockchain',
        price: 50000,
        duration: '3 months',
        details: `Learn how to build smart contracts, decentralized applications using industry standard tools like Solidity, Remix, truffle, ganache, metatask etc. Also learn trading.`,
    },
    {
        name: 'Ethical Hacking',
        price: 50000,
        duration: '3 months',
        details: `Learn how to hack and secure both Wi-Fi and Wired connections. Learn Kali Linux, exploit vulnerabilities in applications, and do Penetration testing.`,
    },
    {
        name: 'UI/UX',
        price: 50000,
        duration: '2 months',
        details: `Learn how to engineer clean, and usable interface. The viability of any product in the market is closely knit to the interface. Clients place more emphasis on what they see.`,
    },
    {
        name: 'IOT',
        price: 50000,
        duration: '3 months',
        details: `Learn how to design, code, build, and market IOT products. Learn and master Arduino IDE, learn how to program micro controllers, and connect to cloud IOT platforms.`,
    },
    {
        name: 'Data Science and ML',
        price: 60000,
        duration: '3 months',
        details: `Learn how to use Python for statistical analysis, develop business intuition using deep learning, and construct interesting machine learning algorithms.`,
    },
    
  ]
  
  
  return (
    <>
     <div class="bg-skyblue">
      
    <div class="center-text container-md ">
            <h1 class="m-b-2">Our Current Courses</h1>
             <p class="text-size my-2" >We are currently accepting registration to enroll in the courses below</p>
           <div class="container">
                <div>
                    <div class="row">
                        {courses.map((course, i) =>
                            <div class="frame col-md-4">
                                <div class="box bg-white  m-r-2  m-b-2">
                                    {/* <div class="hr-line"></div> */}
                                    <div class=" marg-top-4">
                                        <h1 class="text-left course-nam">{course.name}</h1>
                                        <p class='text-left text-bold'>N{course.price}</p>
                                        <p class='text-right marg-top'>{course.duration}</p>
                                    </div>
                                    <p class='text-left'>Our course content is designed to teach this and lots more :</p>
                                    <p class='text-left'>{course.details}</p> 
                                    <button className=" m-b-5 bd-r py-2 px-4 "> <b>Read the curriculum</b></button>
                                    <p class="my-4">No Credit card required</p>
                                

                                </div>
                            </div>
                        )}
                    </div>
                </div>
           </div>
          
    </div>
    <Basics/>
    <Link to="/event">Go to  event</Link>
    </div>
    </>
  )
}
export default Component;
  