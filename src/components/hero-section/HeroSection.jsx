import React from 'react'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import './HeroSection.css'

import { motion } from 'framer-motion'

const HeroSection = ({ handleChange, Edit, Save, home_data }) => {

    const data = localStorage.getItem('data')
    const JSONFormate = JSON.parse(data)

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header handleChange={handleChange} Save={Save} Edit={Edit} home_data={home_data} />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "165px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    {/* <sp/an> */}
                    <textarea
                        className="active"
                        defaultValue={JSONFormate?.nav_sub_title?JSONFormate?.nav_sub_title:home_data?.nav_sub_title}
                        onChange={handleChange}
                        name="nav_sub_title"
                        style={{
                            background: 'transparent',
                            // overflow: "hidden",
                            border: 'none',
                            fontSize: "20px",
                            color: "white",
                            // fontWeight:"800",
                            textTransform: "uppercase",
                            // padding: '10px',  // Optional: removes default padding
                            marginLeft: '90px',   // Optional: removes default margin
                            resize: 'none', // Optional: disables resizing
                            minWidth: '460px',
                            minHeight: "50px",// Optional: adjust width as needed
                            maxHeight: '50px' // Optional: adjust height as needed
                        }}
                    />
                    {/* the best fitness club in the town */}
                    {/* </span> */}
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">
                            {/* Shape */}
                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.shape?JSONFormate?.shape:home_data?.shape}
                                onChange={handleChange}
                                name="shape"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    textTransform: "uppercase",
                                    // padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    maxWidth: '260px',
                                    minHeight: "50px",// Optional: adjust width as needed
                                    maxHeight: '100px' // Optional: adjust height as needed
                                }}
                            />

                        </span>
                        <span>
                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.your?JSONFormate?.your:home_data?.your}
                                onChange={handleChange}
                                name="your"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    textTransform: "uppercase",
                                    // padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    maxWidth: '260px',
                                    minHeight: "50px",// Optional: adjust width as needed
                                    maxHeight: '100px' // Optional: adjust height as needed
                                }}
                            />



                        </span>
                    </div>
                    <div>
                        <span>
                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.ideal_body?JSONFormate?.ideal_body:home_data?.ideal_body}
                                onChange={handleChange}
                                name="ideal_body"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    textTransform: "uppercase",
                                    // padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    maxWidth: 'auto',
                                    minHeight: "50px",// Optional: adjust width as needed
                                    maxHeight: '100px' // Optional: adjust height as needed
                                }}
                            />



                        </span>
                    </div>
                    <div>
                        <span>
                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.lading_des?JSONFormate?.lading_des:home_data?.lading_des}
                                onChange={handleChange}
                                name="lading_des"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    // textTransform: "uppercase",
                                    padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    minWidth: '100%',
                                    minHeight: "50px",// Optional: adjust width as needed
                                    maxHeight: '100px' // Optional: adjust height as needed
                                }}
                            />
                            {/* In here we will help you to shape and build your ideal body and live up your life to fullest */}
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter
                                end={140}
                                start={69}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>
                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.expert_coachs?JSONFormate?.expert_coachs:home_data?.expert_coachs}
                                onChange={handleChange}
                                name="expert_coachs"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    textTransform: "uppercase",
                                    padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    minWidth: '80%',
                                    minHeight: "30px",// Optional: adjust width as needed
                                    maxHeight: '40px' // Optional: adjust height as needed
                                }}
                            />
                        </span>
                    </div>
                    <div>
                        <NumberCounter
                            end={978}
                            start={800}
                            delay="4"
                            preFix="+"
                        />
                        <span>
                            <NumberCounter
                                end={978}
                                start={779}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>
                            {/* members */}
                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.members?JSONFormate?.members:home_data?.members}
                                onChange={handleChange}
                                name="members"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    textTransform: "uppercase",
                                    padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    minWidth: '80%',
                                    minHeight: "20px",// Optional: adjust width as needed
                                    maxHeight: '40px' // Optional: adjust height as needed
                                }}
                            />
                        </span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={50}
                                start={10}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>

                            <textarea
                                className="active"
                                defaultValue={JSONFormate?.fitness_programs?JSONFormate?.fitness_programs:home_data?.fitness_programs}
                                onChange={handleChange}
                                name="fitness_programs"
                                style={{
                                    background: 'transparent',
                                    // overflow: "hidden",
                                    border: 'none',
                                    // fontSize: "20px",
                                    // color: "white",
                                    // fontWeight:"800",
                                    textTransform: "uppercase",
                                    padding: '10px',  // Optional: removes default padding
                                    // marginLeft: '90px',   // Optional: removes default margin
                                    resize: 'none', // Optional: disables resizing
                                    minWidth: '80%',
                                    minHeight: "20px",// Optional: adjust width as needed
                                    maxHeight: '40px' // Optional: adjust height as needed
                                }}
                            />
                        </span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>

            <div className="right-h">
                {/* <button className="btn">Join Now</button> */}
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>
                        
                        Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                />
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection