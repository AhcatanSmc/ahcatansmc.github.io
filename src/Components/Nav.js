import React from 'react';
import '../App.css';

import Logoleft from './Logoleft'
import Logoright from './Logoright'

const Nav = () => {
  return <div>
	  <div className='nav'>
	    <Logoleft className="logoleft"/>
	    <Logoright className="logoright"/>
	  </div>
  </div>      
}

export default Nav;