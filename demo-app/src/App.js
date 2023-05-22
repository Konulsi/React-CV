import image from './assets/images/konul.jpeg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cv-content ">
          <div className="info-box">
            <div className="profile-img">
              <img src={image} />
            </div>
            <div className="contact-me">
              <h3>CONTACT</h3>
              <div className="contact-detail">
                <p> <FontAwesomeIcon icon={faPhone} /> <span>+994 50 588 99 69</span> </p>
                <p>  <FontAwesomeIcon icon={faEnvelope} /><a href="konulsi@code.edu.az">konulsi@code.edu.az</a></p>
                <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://code.edu.az/">www.code.edu.az</a></p>
              </div>
            </div>
            <div className="profile">
              <h3>Profile</h3>
              <p>I have deep knowledge of C#, ASP.NET Core, SQL, algorithms, and data
                structures. Additionally, I have good knowledge of front-end and backend technologies, including React, HTML, CSS, JavaScript, and
                jQuery. I’d be more than happy to discuss with you your project and
                deliver you high-quality solutions that meet your needs.</p>
            </div>
            <div className="language">
              <h3>Language</h3>
              <div className="language-list">
                <p>Azerbaijan - Native</p>
                <p>Turkish - Intermadiate</p>
                <p>English - Working proficiency</p>
                <p>Russian - Working proficiency</p>
              </div>
            </div>
            <div className="references">
              <h3>REFRENCES</h3>
              <div className="references-info" >
                <p>Cavid Bashirov</p>
                <p> <FontAwesomeIcon icon={faPhone} /> <span>+994 51 561 38 83</span> </p>
                <p>  <FontAwesomeIcon icon={faEnvelope} /><a href="bashirovcavid@gmail.com">bashirovcavid@gmail.com</a></p>
              </div>

            </div>
          </div>

          <div className="cv-detail">
            <div className="cv-owner">
              <h1>Konul</h1>
              <h1>Ibrahimova</h1><br></br>
              <p> Full Stack Developer</p>
            </div>

            <div className="education">
                <h3>EDUCATION</h3>
                <h5 className="collage">Baku State Communication and Transport College</h5>
                <p className="collage-specialty">Multichannel Telecommunication Systems </p>
                <span>2011/2015</span>

                <h5 className="university">Azerbaijan Technical University</h5>
                <p className="university-specialty">Information Telecommunication Technologies </p>
                <span>2020/2025</span>

                <h5 className="course">Code Academy</h5>
                <p className="course-specialty">Full Stack Programming </p>
                <span>2022/2023</span>
            </div>

            <div className="experience">
              <h3>WORK EXPERIENCE</h3>
              <h5 className="experience-first">Ministry of Economic Development and Transport | AzIntelekom LLC</h5>
              <span>2015/2023</span>
              <p>National Certificate Services Center - Technician</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
