import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GithubHeatmap from "./GithubHeatmap";

function Expandable({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`expandable-content ${open ? 'expandable-content--open' : 'expandable-content--closed'}`}>
        <div className="expandable-inner">{children}</div>
      </div>
      <div className="expandable-toggle" onClick={() => setOpen(!open)}>
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
    <div className={`portfolio-page flex-row ${darkMode ? 'portfolio-page--dark' : ''}`}>

      <div className="theme-toggle-wrapper" onClick={() => setDarkMode(!darkMode)}>
        <div className={`theme-toggle-btn flex-row ${darkMode ? 'theme-toggle-btn--active' : ''}`}>
          <h3 className='toggle'>{darkMode ? '☼' : '☾'}</h3>
        </div>
      </div>

      <section className="portfolio-content">

        <div className="hero-section flex-column">
          <div className="hero-profile-image-wrapper flex-row">
            <img className="hero-profile-image" src="./profile-image.png" alt="profile" />
          </div>
          <h1>Srikanth Reddy</h1>
          <span>/ˈsriːkɑːnt ˈrɛdi ɛn/ • noun • {time} IST</span>
        </div>
        <br /><br />
        <div className="hero-bio">
          <p>
            a front-end developer with a solid background in contemporary web technologies and full-stack architecture.
            <br /><br />
            I work best at the nexus of design, code, and business, turning challenging issues into sophisticated, user-centered solutions.
          </p>
        </div>

        <div className="section-block">
          <span className="section-label">EXPERIENCE</span>
          <br /><br />
          <div className="flex-row-space-between">
            <p className='title'>Tata Consultancy Services</p>
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

        <div className="section-block">
          <span className="section-label">EDUCATION</span>
          <br /><br />
          <div className="flex-row-space-between">
            <p className='title'>Presidency University</p>
            <span>Jun 2019 - Nov 2023</span>
          </div>
          <Expandable>
            <p>I completed my Bachelor of <Link>Information Science and Engineering</Link> from Presidency University (2019 - 2023) with a CGPA of 7.92, gaining a strong foundation in core subjects such as Database Management Systems, Operating Systems, Data Structures, Java, Python, and Web Technologies.</p>
            <br />
            <p>The program strengthened my problem-solving abilities and provided hands-on experience in building structured, scalable software solutions aligned with industry practices.</p>
            <br />
            <p>Beyond academics, I actively participated in cultural activities and was a member of the football and table tennis teams, developing teamwork, discipline, and leadership skills alongside my technical growth.</p>
          </Expandable>
        </div>

        <div className="section-block">
          <span className="section-label">PROJECTS</span>
          <br /><br />

          <div className="project-card flex-row">
            <div className="project-card-content">
              <div className="flex-row-space-between">
                <p className='title'>Sugar Orbit</p>
                <span>ongoing development</span>
              </div>
              <Expandable>
                <p>Sugar Orbit is currently under active development as a modern, scalable e-commerce platform focused on delivering a seamless digital experience for sweets, namkeens, and chocolates. The project is being built with a strong emphasis on clean architecture, responsive design, and performance optimization, ensuring a smooth and intuitive user journey across devices.</p>
                <br />
                <p>The platform is being developed using modern web technologies with a focus on secure authentication, optimized product management, and a scalable backend structure. Ongoing improvements include refining UI interactions, enhancing performance, strengthening security practices, and preparing the system for production-grade deployment with robust infrastructure and monitoring.</p>
              </Expandable>
            </div>
          </div>

          <br /><br />

          <div className="project-card flex-row">
            <div className="project-card-content">
              <div className="flex-row-space-between">
                <p className='title'>Ticketo</p>
                <span>ongoing development</span>
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

        <div className="flex-row-space-between">
          <div className='row'><p className='title'>Arka Holistics <Link className='inline-link' to='https://arkaholistic.com/' target='_blank'>link</Link></p></div>
          <span>Aug 2025</span>
        </div>
        <Expandable>
          <p>Arka Holistic is a fully responsive wellness platform developed for a yoga and sound healing brand, designed to deliver a calm, immersive, and user-centric digital experience. Built with React for a dynamic and component-driven frontend, the application ensures smooth navigation, reusable UI architecture, and optimized rendering across devices with a mobile-first approach.</p>
          <br />
          <p>The backend and server-side functionalities are powered by Node.js, enabling scalable structure, efficient data handling, and future-ready extensibility. The project emphasizes performance optimization, clean code practices, and structured component design, and is deployed on Hostinger to ensure reliable hosting, stable production availability, and fast load performance.</p>
        </Expandable>

        <br />
        <div className="section-block">
          <span className="section-label">GITHUB CONTRIBUTIONS</span>
          <br /><br />
          <GithubHeatmap darkMode={darkMode}/>
        </div>

        <br />
        <div className="section-block">
          <span className="section-label">RESEARCH PAPER</span>
          <br /><br />
          <div className="">
            <p className='title'>Information Extraction Using Natural Language Processing</p>
            <span>International Journal of Scientific Research in Engineering and Management, 06(05) <br />
              ( DOI: 10.55041/IJSREM13271 )</span>
            <br />
            <p className='meta-text'>Authors : Srikanth Reddy, Varun Reji , Umar Shariff &nbsp;   <Link className='inline-link' to='https://www.researchgate.net/publication/360633194_INFORMATION_EXTRACTION_USING_NATURAL_LANGUAGE_PROCESSING' target='_blank'>View Publication</Link></p>
          </div>
          <Expandable>
            <b>Abstract</b>
            <p>The expanding volume of data/Information creates a new challenge for Information Extraction techniques. The amount of unstructured data has increased in recent years. When we use this data in a clean and better way, we can extract wide variety of beneficial outcomes. Reduction of a text to its essential content, is a very complex problem which, despite the progress in the area thus far, poses many challenges to the scientific community. It is also a relevant application in today's information society given the enormous amount of production and processing of data, leading to exponential growth of textual information online and the need to momentarily assess the contents of text collections. Information Extraction using Natural Language Text is used to process, or extract and encode information from unstructured data and produce desired output data according to the application. This review article is about how Information Extraction is done using NLP (Natural language Processing)</p>
          </Expandable>
        </div>
        <br />
        <div className="section-block">
          <span className="section-label">TECH STACK</span>
          <br /><br />
          <p>I'm comfortable working across a wide range of technologies, but these are the tools I've consistently relied on and refined through hands-on experience.</p>

          <div className="techstack-slider-container">
            <div className="techstack-slider flex-row">
              {[...images, ...images].map((img, index) => (
                <div key={index}>
                  <img className="techstack-icon" src={img} alt="tech-stack-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
        <div className="section-block">
          <span className="section-label">ABOUT ME</span>
          <br /><br />
          <p>I am driven, disciplined, and committed to continuous self-improvement through consistent effort, patience, and a strong growth mindset, always striving to become better every single day.</p>
          <br />
          <p>I enjoy playing football, love drawing art and taking random pictures, value creativity and teamwork, and constantly look for opportunities to improve situations and push myself beyond my limits.</p>
          <br />
          <img className='about-photo' src="./about-img.jpeg" alt="about-image" />
          <i><p className='meta-text'>Captured in silence&nbsp;   <Link to='https://vsco.co/blackwoodseven/gallery' target='_blank'>link</Link></p></i>
        </div>

        <br />
        <div className="section-block">
          <span className="section-label">CONTACT</span>
          <br /><br />
          <p className='contact-text'>Find me on <Link className='contact-link' to='/linkedin'>LinkedIn</Link> or reach out via <Link className='contact-link' to='/email'>email</Link> </p>
        </div>

      </section>
    </div>
  )
}

export default Home