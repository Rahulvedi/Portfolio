import React from 'react'
import { Header,Footer,AboutSec1,Skills} from '../Components/default'
import { motion } from 'framer-motion'
import { fade } from '../Animations/index'
const About = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={fade} transition={{duration:0.4}}>
            <Header/>
            <AboutSec1/>
            <Skills/>
            <Footer/>
        </motion.div>
    )
}

export default About
