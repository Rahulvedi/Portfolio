import React from 'react'
import { Header, HeroSection ,HomeSec1,Footer} from '../Components/default'
import { motion } from 'framer-motion'
import {fade} from '../Animations/index'
import styled from "styled-components";
import Hiring from "../Images/Hiring.svg";
const Home = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={fade} transition={{duration:0.4}}>
            <Header />
            <HeroSection />
            <HomeSec1 Imgpos={true} ImgSrc={Hiring}/>
            <Footer/>
        </motion.div>
    )
}

export default Home
