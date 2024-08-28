import React, { useState, useEffect } from 'react'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
import dumble from '../../assets/sport.png'
import cardio from '../../assets/cardiogram.png'
import crown from '../../assets/crown.png'


const Plans = ({ handleChange, home_data }) => {
    const data = localStorage.getItem('data')
    const JSONFormate = JSON.parse(data)

    const [plansData, setPlansData] = useState(() => {
        const savedData = localStorage.getItem('plansData');
        return savedData ? JSON.parse(savedData) : [
            {
                plan_icon: cardio,
                plan_name: "BASIC PLAN",
                price: "25",
                features: [
                    "2 hours of excercises",
                    "Free consultaion to coaches",
                    "Access to The Community",
                ],
            },
            {
                plan_icon: crown,
                plan_name: "PREMIUM PLAN",
                price: "30",
                features: [
                    "5 hour of excercises",
                    "Free consultaion of Coaches",
                    "Accessto minibar",
                ],
            },
            {
                plan_icon: dumble,
                plan_name: "PRO PLAN",
                price: "45",
                features: [
                    "8 hours of excercises",
                    "Consultation of Private Coach",
                    "Free Fitness Merchandises",
                ],
            },
        ]
    })
    useEffect(() => {
        localStorage.setItem('plansData', JSON.stringify(plansData));
    }, [plansData]);

    console.log(plansData, 'this is plan data')
    const handleChange_ = (index, field, value) => {
        const newExperiences = [...plansData];
        newExperiences[index][field] = value;
        setPlansData(newExperiences);
    };
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div
                className="programs-header"
                style={{ gap: '.5rem' }}
            >
                <span className="stroke-text">
                    <textarea
                        className="active italic text-center"
                        defaultValue={JSONFormate?.ready_to_start ? JSONFormate?.ready_to_start : home_data?.ready_to_start}
                        onChange={handleChange}
                        name="ready_to_start"
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
                            maxWidth: '100%',
                            minHeight: "20px",// Optional: adjust width as needed
                            maxHeight: '60px' // Optional: adjust height as needed
                        }}
                    />
                </span>
                <span>


                    <textarea
                        className="active italic text-center"
                        defaultValue={JSONFormate?.your_journey ? JSONFormate?.your_journey : home_data?.your_journey}
                        onChange={handleChange}
                        name="your_journey"
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
                            maxWidth: '100%',
                            minHeight: "20px",// Optional: adjust width as needed
                            maxHeight: '60px' // Optional: adjust height as needed
                        }}
                    />


                </span>
                <span className="stroke-text">


                    <textarea
                        className="active italic text-center"
                        defaultValue={JSONFormate?.now_with_us?JSONFormate?.now_with_us:home_data?.now_with_us}
                        onChange={handleChange}
                        name="now_with_us"
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
                            maxWidth: '100%',
                            minHeight: "20px",// Optional: adjust width as needed
                            maxHeight: '60px' // Optional: adjust height as needed
                        }}
                    />



                </span>
            </div>
            <div className="plans">
                {plansData?.map((plan, index) => (
                    <div className="plan" key={index}>
                        <div className='w-full flex justify-center items-center'>
                            <img src={plan?.plan_icon} alt='' height={'50px'} width={"50px"} />
                        </div>
                        <span>
                            {/* {plan.name} */}
                            <textarea
                                className="active italic text-center"
                                defaultValue={plan?.plan_name}
                                onChange={(e) => {
                                    handleChange_(index, 'plan_name', e.target.value);
                                }}
                                name="plan_name"
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
                                    minHeight: "40px",// Optional: adjust width as needed
                                    maxHeight: '40px' // Optional: adjust height as needed
                                }}
                            />
                        </span>
                        <span>

                            <textarea
                                className="active italic text-center"
                                defaultValue={`$ ${plan?.price}`}
                                onChange={(e) => {
                                    handleChange_(index, 'price', e.target.value);
                                }}
                                name="price"
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
                                    maxWidth: '100%',
                                    height: "60px",// Optional: adjust width as needed
                                    // maxHeight: '40px' // Optional: adjust height as needed
                                }}
                            />
                        </span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits </span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans