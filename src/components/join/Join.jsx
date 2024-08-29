import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Join.css'

const Join = ({ handleChange, home_data }) => {
    const data = localStorage.getItem('data')
    const JSONFormate = JSON.parse(data)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span>
                        <textarea
                            className="active"
                            defaultValue={JSONFormate?.footer_text_gym_1 ? JSONFormate?.footer_text_gym_1 : home_data?.footer_text_gym_1}
                            onChange={handleChange}
                            name="footer_text_gym_1"
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
                                minHeight: "50px",// Optional: adjust width as needed
                                maxHeight: '70px' // Optional: adjust height as needed
                            }}
                        />
                    </span>
                </div>
                {/* <div> */}
                <span>
                    <textarea
                        className="active  "
                        defaultValue={JSONFormate?.level_up_1?JSONFormate?.level_up_1:home_data?.level_up_1}
                        onChange={handleChange}
                        name="level_up_1"
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
                            maxWidth: '20%',
                            minHeight: "50px",// Optional: adjust width as needed
                            maxHeight: '70px' // Optional: adjust height as needed
                        }}
                    />
                </span>
                <span className="stroke-text">

                    <textarea
                        className="active"
                        defaultValue={JSONFormate?.withus?JSONFormate?.withus:home_data?.withus}
                        onChange={handleChange}
                        name="withus"
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
                            maxWidth: '50%',
                            minHeight: "50px",// Optional: adjust width as needed
                            maxHeight: '70px' // Optional: adjust height as needed
                        }}
                    />
                </span>
                {/* </div> */}
            </div>
            <div className="right-j">
                {/* <form
                    ref={form}
                    className="email-container"
                    onSubmit={sendEmail}
                >
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email address"
                    />
                    <button className="btn btn-j">Join Now</button>
                </form> */}
            </div>
        </div>
    )
}

export default Join;