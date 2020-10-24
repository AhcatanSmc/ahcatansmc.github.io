import React from 'react'; 
import '../App.css';

const CV = ({ onRouteChange }) => 
<div>
    <div className="App">
		<header>
      <div className="Button">
        <button className="Buttonstyle" onClick={() => onRouteChange('Mainpage')}>HOME</button>
        <button className="Buttonstyle" onClick={() => onRouteChange('Bio')}>BIO</button>
        <button className="Buttonstyle" onClick={() => onRouteChange('Contact')}>CONTACT</button>
      </div>
      <div className="Text Homepage">
        <h1>PROFESSIONAL EXPERIENCE</h1> 
        <p className="Textbold"> June 2020 - Present : </p> <hr></hr><br/>
        <p> <b>Content Creator & Community Manager (Freelance)</b> <br/><br/>Creating visual identities, images, video, AR filters and other digital content. Developed a 5K+ community on Instagram in 4 months. Creating content for partner brands. Managing communities. This includes concluding deals with brands, organisizing contests, and generally taking the best care of followers.</p> <br></br>
        <p className="Textbold"> May 2019 - Present : </p> <hr></hr>
        <p> <b>Web Developper (Freelance) </b> <br/><br/> Creating sites and apps from zero with React, Node.js, SQL.</p> <br/>
        <p className="Textbold"> October 2018 - Present : </p> <hr></hr>
        <p> <b>Specialised Educator </b> <br/><br/> Organising activities with mentally handicaped people. </p> <br/>
        <p className="Textbold"> August 2017 - Jun 2020 : </p> <hr></hr>
        <p> <b>Psychologist </b> <br/> <br></br> Taking care of residents with psychological issues. </p><br/>
        <h1>EDUCATION</h1>
        <p className="Textbold"> 2019 - 2020 :</p> <hr></hr>
        <p> Certification in Clinical Psychotherapy </p> <br></br>
        <p className="Textbold"> 2015 - 2017 :</p> <hr></hr>
        <p> Master Degree in Clinical Psychology </p> <br></br>
        <p className="Textbold"> 2011 - 2015 :</p> <hr></hr>
        <p> Bachelor Degree in Psychology and Educational Sciences </p> <br></br>
        <h1> Other Certifications </h1>
        <p> • Complete Roadmap to Senior Web Developer Diploma - Udemy </p> 
        <p> • The Complete Web Developer: Zero to Mastery - Udemy </p> <br></br>
        <h1> Skills </h1>
        <p> Adobe • Creative Cloud • After Effects • Premiere Pro</p>
        <p>Photoshop • Illustrator • Indesign • Lightroom • Procreate • Spark AR</p>
        <p>HTML • CSS • Javascript • React.js • Node.js • Redux • Github • Office Suite</p> <br></br>
        <h1>Langages</h1>
        <p> French • Mother tongue </p>
        <p> English • Good knowledge </p>
        <p> Dutch • School knowledge </p>
        <p> Japanese • Basic (currently working on it)</p> <br></br>
        <h1>Hobbies</h1>
        <p>Photography • Music • Cinema • Drawing • Sports</p>
        <p>Tech & Geeky Stuff • Avid Everyday Learner</p>
        </div>
        <div>
         <a href="https://www.linkedin.com/in/natacha-camus-a70a10106/" rel="noopener noreferrer" target={"_blank"}>
        <img class="Socials-icons" src={require('../linkedin.png')} alt="linkedin-icon"/>
        </a>
        <a href="https://www.instagram.com/junespectacular/" rel="noopener noreferrer" target={"_blank"}>
        <img class="Socials-icons" src={require('../insta.png')} alt="insta-icon"/>
        </a>
        <a href="https://github.com/AhcatanSmc" rel="noopener noreferrer" target={"_blank"}>
        <img class="Socials-icons" src={require('../github.png')} alt="github-icon"/>
        </a>
        <a href="mailto:natacha.camus@hotmail.com" rel="noopener noreferrer" target={"_blank"}>
        <img class="Socials-icons" src={require('../mail.png')} alt="mail-icon"/>
        </a>
        </div>
    </header>
    </div>
</div>

export default CV;