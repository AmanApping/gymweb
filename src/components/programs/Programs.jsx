import React, { useState, useEffect } from 'react';
import RightArrow from '../../assets/rightArrow.png';
import './Programs.css';
import running from '../../assets/runer-silhouette-running-fast.png'
import burn from '../../assets/burning.png'
import cardio from '../../assets/cardiogram.png'
import dumble from '../../assets/sport.png'


const Programs = ({ handleChange, home_data }) => {
   
    const data = localStorage.getItem('data')
    const JSONFormate = JSON.parse(data)
    const [program, setProgram] = useState(() => {
        const savedData = localStorage.getItem('program');
        return savedData ? JSON.parse(savedData) :
            [
                {
                    image: dumble,
                    heading: "Strength Training",
                    details:
                        "In this program, you are trained to improve your strength through many exercises.",
                },
                {
                    image: running,
                    heading: "Cardio Training",
                    details:
                        "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
                },
                {
                    image: burn
                    ,
                    heading: "Fat Burning",
                    details:
                        "This program is suitable for you who wants to get rid of your fat and lose their weight.",
                },
                {
                    image: cardio
                    ,
                    heading: "Health Fitness",
                    details:
                        "This programs is designed for those who exercises only for their body fitness not body building.",
                },
            ]
    })

    useEffect(() => {
        localStorage.setItem('program', JSON.stringify(program));
    }, [program]);

    const handleChange_ = (index, field, value) => {
        const newExperiences = [...program];
        newExperiences[index][field] = value;
        setProgram(newExperiences);
    };


    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className="stroke-text italic">
                    <textarea
                        className="active italic text-center"
                        defaultValue={JSONFormate?.nav_sub_title ? JSONFormate?.nav_sub_title : home_data?.nav_sub_title}
                        onChange={handleChange}
                        name="nav_sub_title"
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
                            maxWidth: '100%',
                            minHeight: "50px",// Optional: adjust width as needed
                            maxHeight: '100px' // Optional: adjust height as needed
                        }}
                    />
                </span>
                <span>
                    <textarea
                        className="active italic text-center"
                        defaultValue={JSONFormate?.programs ? JSONFormate?.programs : home_data?.programs}
                        onChange={handleChange}
                        name="programs"
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
                            maxWidth: '100%',
                            minHeight: "50px",// Optional: adjust width as needed
                            maxHeight: '100px' // Optional: adjust height as needed
                        }}
                    />
                </span>
                <span className="stroke-text">
                    <textarea
                        className="active italic text-center"
                        defaultValue={JSONFormate?.to_shape_you ? JSONFormate?.to_shape_you : home_data?.to_shape_you}
                        onChange={handleChange}
                        name="to_shape_you"
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
                            maxWidth: '100%',
                            minHeight: "50px",// Optional: adjust width as needed
                            maxHeight: '100px' // Optional: adjust height as needed
                        }}
                    />



                </span>
            </div>
            <div className="program-categories">
                {program?.map((program, index) => (
                    <>
                        {/* <div key={index} className="cancle_icon hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                                onClick={() => handleRemoveEx(index)} // Click handler to remove image
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div> */}
                        <div className="category" key={index}>
                            <img src={program.image} alt='icons' style={{ height: "40px", width: "40px" }} />
                            <span>
                                <textarea
                                    className="active"
                                    defaultValue={program?.heading}
                                    onChange={(e) => {
                                        handleChange_(index, 'heading', e.target.value);
                                        // e.target.style.height = 'auto'; // Reset the height to auto
                                        // e.target.style.height = `${e.target.scrollHeight}px`;
                                    }}
                                    name="heading"
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
                                <div className="" style={{ visibility: "hidden", position: "relative", height: "10px" }}>
                                    {program.heading}
                                </div>
                            </span>
                            <span>
                                <textarea
                                    className="active"
                                    defaultValue={program?.details}
                                    onChange={(e) => {
                                        handleChange_(index, 'details', e.target.value);
                                        // e.target.style.height = 'auto'; // Reset the height to auto
                                        // e.target.style.height = `${e.target.scrollHeight}px`;
                                    }}
                                    name="details"
                                    style={{
                                        background: 'transparent',
                                        // overflow: "hidden",
                                        border: 'none',
                                        // fontSize: "20px",
                                        // color: "white",
                                        // fontWeight:"800",
                                        padding: '10px',  // Optional: removes default padding
                                        // marginLeft: '90px',   // Optional: removes default margin
                                        resize: 'none', // Optional: disables resizing
                                        minWidth: '100%',
                                        // minHeight: "30px",// Optional: adjust width as needed
                                        // maxHeight: '40px' // Optional: adjust height as needed
                                    }}
                                />

                                <div className="" style={{ visibility: "hidden", position: "relative", height: "10px" }}>
                                    {program.details}
                                </div>
                            </span>
                            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                        </div>
                    </>

                ))}
            </div>
        </div>
    )
}

export default Programs;