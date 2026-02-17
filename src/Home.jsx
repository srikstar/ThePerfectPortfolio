import { useEffect, useState } from 'react'

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

      </section>
    </div>
  )
}

export default Home