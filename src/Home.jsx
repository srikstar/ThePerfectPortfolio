import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GithubHeatmap from "./GithubHeatmap";

function Expandable({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`view-container ${open ? 'openView' : 'closeView'}`}>
        <div className="more-container">{children}</div>
      </div>
      <div className="view-more-btn" onClick={() => setOpen(!open)}>
        <span>{open ? 'View Less ↑' : 'View More ↓'}</span>
      </div>
    </>
  )
}

function Home() {

  const images = [
    'https://cdn.simpleicons.org/javascript', 'https://cdn.simpleicons.org/python', 'https://cdn.simpleicons.org/react', 'https://cdn.simpleicons.org/firebase'
    , 'https://cdn.simpleicons.org/mongodb', 'https://cdn.simpleicons.org/github', 'https://cdn.simpleicons.org/linux', 'https://cdn.simpleicons.org/figma'
    , 'https://nodejs.org/static/logos/jsIconGreen.svg', 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000', 'https://img.icons8.com/?size=100&id=p2VooZ9Gcgxm&format=png&color=000000'
  ]


  const [darkMode, setDarkMode] = useState(false)
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 8))

  useEffect(() => {
    document.title = 'Srikanth Reddy | Portfolio'
    const interval = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 8))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`home row ${darkMode ? 'home-bg-black' : ''}`}>

      <div className="background-color-container" onClick={() => setDarkMode(!darkMode)}>
        <div className={`bg-clr-btn row ${darkMode ? 'bg-clr-btn-on' : ''}`}>
          <h3>{darkMode ? '☼' : '☾'}</h3>
        </div>
      </div>

      <section className="main-container">

        <div className="home-image-container column">
          <div className="image-section row">
            <img className="profile-image" src="./profile-image.png" alt="profile" />
          </div>
          <h1>Srikanth Reddy</h1>
          <span>/ˈsriːkɑːnt ˈrɛdi ɛn/ • noun • {time} IST</span>
        </div>
        <br /><br />
        <div className="about-container">
          <p>
            a front-end developer with a solid background in contemporary web technologies and full-stack architecture.
            <br /><br />
            I work best at the nexus of design, code, and business, turning challenging issues into sophisticated, user-centered solutions.
          </p>
        </div>

        <div className="experience-container">
          <span className="title-tag">EXPERIENCE</span>
          <br /><br />
          <div className="row-sb">
            <p>Tata Consultancy Services</p>
            <span>May 2023, Bangalore</span>
          </div>
          <Expandable>
            <p>In my first project focused on web application development, I contributed to building and enhancing responsive applications using React, Node.js, Express, MySQL, and MongoDB under senior mentorship, ensuring scalable architecture and maintainable code practices.</p>
            <br />
            <p>I designed and integrated secure RESTful APIs supporting authentication and CRUD operations, implemented JWT-based authentication with role-based access control, and applied industry-standard security practices including input validation, bcrypt password hashing, and protection against XSS and CSRF vulnerabilities.</p>
            <br />
            <p>Additionally, I optimized frontend performance through lazy loading and code splitting, contributed to improved load times and user experience, and actively participated in Agile sprints and peer code reviews to maintain high-quality production standards.</p>
            <br />
            <p>In my last project involving Axway Secure Transport, I managed secure file transfer operations to ensure encrypted, reliable data exchange across enterprise systems while maintaining backend ST servers for high availability and performance stability.</p>
            <br />
            <p>I administered BMC Control-M batch scheduling to guarantee timely execution of automated workflows and business-critical processes, ensuring operational continuity across distributed environments.</p>
            <br />
            <p>Additionally, I performed patch upgrades, addressed security vulnerabilities to maintain compliance standards, and developed shell scripts to automate routine tasks, reducing manual intervention and improving overall system efficiency.</p>
          </Expandable>

        </div>

        <div className="experience-container">
          <span className="title-tag">EDUCATION</span>
          <br /><br />
          <div className="row-sb">
            <p>Presidency University</p>
            <span>Jun 2019 - Nov 2023</span>
          </div>
          <Expandable>
            <p>I completed my Bachelor of <b>Information Science and Engineering</b> from Presidency University (2019 - 2023) with a CGPA of 7.92, gaining a strong foundation in core subjects such as Database Management Systems, Operating Systems, Data Structures, Java, Python, and Web Technologies.</p>
            <br />
            <p>The program strengthened my problem-solving abilities and provided hands-on experience in building structured, scalable software solutions aligned with industry practices.</p>
            <br />
            <p>Beyond academics, I actively participated in cultural activities and was a member of the football and table tennis teams, developing teamwork, discipline, and leadership skills alongside my technical growth.</p>
          </Expandable>
        </div>

        <div className="experience-container">
          <span className="title-tag">PROJECTS</span>
          <br /><br />

          <div className="project-dev-container row">
            <div className="project">
              <div className="row-sb">
                <p>Sugar Orbit</p>
                <span>In ongoing development</span>
              </div>
              <Expandable>
                <p>Sugar Orbit is currently under active development as a modern, scalable e-commerce platform focused on delivering a seamless digital experience for sweets, namkeens, and chocolates. The project is being built with a strong emphasis on clean architecture, responsive design, and performance optimization, ensuring a smooth and intuitive user journey across devices.</p>
                <br />
                <p>The platform is being developed using modern web technologies with a focus on secure authentication, optimized product management, and a scalable backend structure. Ongoing improvements include refining UI interactions, enhancing performance, strengthening security practices, and preparing the system for production-grade deployment with robust infrastructure and monitoring.</p>
              </Expandable>
            </div>
          </div>

          <br /><br />

          <div className="project-dev-container row">
            <div className="project">
              <div className="row-sb">
                <p>Ticketo</p>
                <span>In ongoing development</span>
              </div>
              <Expandable>
                <p>Ticketo is a full-stack movie ticket booking platform inspired by BookMyShow, currently under active development to simulate a real-world cinema reservation experience. The application enables users to browse movies, explore show timings, select seats dynamically, and proceed through an intuitive booking flow powered by a responsive React-based frontend.</p>
                <br />
                <p>The backend is built using Node.js to manage booking logic, seat availability handling, and secure user authentication, with ongoing enhancements focused on scalability, performance optimization, and improved state management. As development progresses, the platform is being refined with cleaner architecture, stronger validation mechanisms, and production-ready deployment planning to deliver a robust and scalable ticketing solution.</p>
              </Expandable>
            </div>
          </div>
        </div>

        <br /><br />

        <div className="row-sb">
          <Link className='links' to='https://arkaholistic.com/' target='_blank'><p>Arka Holistics</p></Link>
          <span>Aug 2025</span>
        </div>
        <Expandable>
          <p>Arka Holistic is a fully responsive wellness platform developed for a yoga and sound healing brand, designed to deliver a calm, immersive, and user-centric digital experience. Built with React for a dynamic and component-driven frontend, the application ensures smooth navigation, reusable UI architecture, and optimized rendering across devices with a mobile-first approach.</p>
          <br />
          <p>The backend and server-side functionalities are powered by Node.js, enabling scalable structure, efficient data handling, and future-ready extensibility. The project emphasizes performance optimization, clean code practices, and structured component design, and is deployed on Hostinger to ensure reliable hosting, stable production availability, and fast load performance.</p>
        </Expandable>

        <br />
        <div className="experience-container">
          <span className="title-tag">GITHUB CONTRIBUTIONS</span>
          <br /><br />
          <GithubHeatmap />
        </div>



        {/* /RESEARCH PAPER */}
        <div className="experience-container">
          <span className="title-tag">RESEARCH PAPER</span>
          <br /><br />
          <div className="">
            <p>Information Extraction Using Natural Language Processing</p>
            <span>International Journal of Scientific Research in Engineering and Management, 06(05) <br />
              ( DOI: 10.55041/IJSREM13271 )</span>
            <br />
            <p className='authors'>Authors : Srikanth Reddy, Varun Reji , Umar Shariff &nbsp;   <Link className='links' to='https://www.researchgate.net/publication/360633194_INFORMATION_EXTRACTION_USING_NATURAL_LANGUAGE_PROCESSING' target='_blank'>View Publication</Link></p>
          </div>
          <Expandable>
            <b>Abstract</b>
            <p>The expanding volume of data/Information creates a new challenge for Information Extraction techniques. The amount of unstructured data has increased in recent years. When we use this data in a clean and better way, we can extract wide variety of beneficial outcomes. Reduction of a text to its essential content, is a very complex problem which, despite the progress in the area thus far, poses many challenges to the scientific community. It is also a relevant application in today’s information society given the enormous amount of production and processing of data, leading to exponential growth of textual information online and the need to momentarily assess the contents of text collections. Information Extraction using Natural Language Text is used to process, or extract and encode information from unstructured data and produce desired output data according to the application. This review article is about how Information Extraction is done using NLP (Natural language Processing)</p>
          </Expandable>
        </div>


        {/* /TECHSTACK */}

        <div className="experience-container">
          <span className="title-tag">TECH STACK</span>
          <br /><br />
          <p>I'm comfortable working across a wide range of technologies, but these are the tools I've consistently relied on and refined through hands-on experience.</p>



          <div className="slider-container">
            <div className="slider row">
              {[...images, ...images].map((img, index) => (
                <div key={index}>
                  <img className="tech-stack-img" src={img} alt="tech-stack-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* /ABOUT ME */}

        <br />
        <div className="experience-container">
          <span className="title-tag">ABOUT ME</span>
          <br /><br />
          <p>I am driven, disciplined, and committed to continuous self-improvement through consistent effort, patience, and a strong growth mindset, always striving to become better every single day.</p>
          <br />
          <p>I enjoy playing football, love drawing art and taking random pictures, value creativity and teamwork, and constantly look for opportunities to improve situations and push myself beyond my limits.</p>
          <br />
          <img className='about-image' src="./about-img.jpeg" alt="about-image" />
          <i><p className='authors'>Captured in silence&nbsp;   <Link to='https://vsco.co/blackwoodseven/gallery' target='_blank'>link</Link></p></i>
        </div>


        {/* /CONTACT */}

        <br />
        <div className="experience-container">
          <span className="title-tag">CONTACT</span>
          <br /><br />
          
                
       </div>




      </section >
    </div >
  )
}

export default Home