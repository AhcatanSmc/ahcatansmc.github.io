import React from 'react'; 
import '../App.css';

const Contact = ({ onRouteChange }) => 
<div>
    <div className="App">
		<header>
      <div className="Button">
        <button className="Buttonstyle" onClick={() => onRouteChange('Mainpage')}>HOME</button>
        <button className="Buttonstyle" onClick={() => onRouteChange('Bio')}>BIO</button>
        <button className="Buttonstyle" onClick={() => onRouteChange('CV')}>CV</button>
      </div>
      <div className="Text Homepage">
        <h1>How to contact me ?</h1> 
        <p> natacha.camus@hotmail.com </p>
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

export default Contact;