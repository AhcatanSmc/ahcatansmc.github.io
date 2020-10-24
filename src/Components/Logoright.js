import React from 'react'
import {Animated} from 'react-animated-css'

const Logoright = () => {
	return (
	<Animated 
	animationIn="FadeInRight"
	animationInDuration={1000}
	isVisible={true}>
	<div className="Logoright">
		<p>Digital Creator</p>
	</div>
	</Animated>
	)
}

export default Logoright