import React, { useState, useEffect } from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = ({ handleChange, home_data }) => {
    const data = localStorage.getItem('data')
    const JSONFormate = JSON.parse(data)
    const [images, setImages] = useState({
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
    });
    const [showUpload, setShowUpload] = useState({
        image1: false,
        image2: false,
        image3: false,
        image4: false,
    });

    // Retrieve images from local storage when the component mounts
    useEffect(() => {
        const storedImages = {};
        const uploadStatus = {};

        Object.keys(images).forEach(key => {
            const storedImage = localStorage.getItem(key);
            if (storedImage) {
                storedImages[key] = storedImage;
                uploadStatus[key] = false;
            } else {
                storedImages[key] = images[key];
                uploadStatus[key] = true;
            }
        });

        setImages(storedImages);
        setShowUpload(uploadStatus);
    }, []);

    const handleRemoveImage = (key) => {
        console.log("Click ")
        setImages(prevImages => ({
            ...prevImages,
            [key]: null,
        }));
        setShowUpload(prevShowUpload => ({
            ...prevShowUpload,
            [key]: true,
        }));
        localStorage.removeItem(key);
    };

    const handleImageUpload = (event, key) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setImages(prevImages => ({
                    ...prevImages,
                    [key]: base64Image,
                }));
                setShowUpload(prevShowUpload => ({
                    ...prevShowUpload,
                    [key]: false,
                }));
                localStorage.setItem(key, base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                {Object.keys(images).map(key => (
                    <>
                        <div key={key} className="Reasons__image-container">
                            <div className="cancle_icon hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                    onClick={() => handleRemoveImage(key)} // Click handler to remove image
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            {images[key] && (
                                <img src={images[key]} className='Reasons__image active' alt={`Uploaded ${key}`} />
                            )}
                            {showUpload[key] && (
                                <input type="file" onChange={(e) => handleImageUpload(e, key)} />
                            )}
                        </div>
                    </>
                ))}
            </div>

            <div className="right-r">
                <span>
                    <textarea
                        className="active "
                        defaultValue={JSONFormate?.some_reasons ? JSONFormate?.some_reasons : home_data?.some_reasons}
                        onChange={handleChange}
                        name="some_reasons"
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
                            maxHeight: '50px' // Optional: adjust height as needed
                        }}
                    />
                </span>
                <div>
                    <span className="stroke-text">
                        <textarea
                            className="active "
                            defaultValue={JSONFormate?.why ? JSONFormate?.why : home_data?.why}
                            onChange={handleChange}
                            name="why"
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
                            className="active "
                            defaultValue={JSONFormate?.choose_us ? JSONFormate?.choose_us : home_data?.choose_us}
                            onChange={handleChange}
                            name="choose_us"
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
                <div>
                    <div className="details-r">
                        <div>
                            <img src={tick} alt=""></img>
                            <span>
                                <textarea
                                    className="active "
                                    defaultValue={JSONFormate?.some_reason_1 ? JSONFormate?.some_reason_1 : home_data?.some_reason_1}
                                    onChange={handleChange}
                                    name="some_reason_1"
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
                                        maxHeight: '40px' // Optional: adjust height as needed
                                    }}
                                />

                                <div className="" style={{ visibility: "hidden", position: "relative", height: "10px" }}>
                                    TRAIN SMARTER AND FASTER THAN BEFORE
                                </div>
                            </span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>
                                <textarea
                                    className="active "
                                    defaultValue={JSONFormate?.some_reason_2 ? JSONFormate?.some_reason_2 : home_data?.some_reason_2}
                                    onChange={handleChange}
                                    name="some_reason_2"
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
                                        minWidth: "100%",
                                        height: "auto" // Optional: adjust height as needed
                                    }}
                                /><br />
                                <div className="" style={{ visibility: "hidden", position: "relative", height: "10px" }}>
                                    TRAIN SMARTER AND FASTER THAN BEFORE
                                </div>


                            </span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>
                                <textarea
                                    className="active "
                                    defaultValue={JSONFormate?.some_reason_3 ? JSONFormate?.some_reason_3 : home_data?.some_reason_3}
                                    onChange={handleChange}
                                    name="some_reason_3"
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
                                        minWidth: "100%",
                                        height: "auto" // Optional: adjust height as needed
                                    }}
                                />
                                <div className="" style={{ visibility: "hidden", position: "relative", height: "10px" }}>
                                    TRAIN SMARTER AND FASTER THAN BEFORE
                                </div></span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>



                                <textarea
                                    className="active "
                                    defaultValue={JSONFormate?.some_reason_4 ? JSONFormate?.some_reason_4 : home_data?.some_reason_4}
                                    onChange={handleChange}
                                    name="some_reason_4"
                                    style={{
                                        background: 'transparent',
                                        overflow: "hidden",
                                        border: 'none',
                                        // fontSize: "20px",
                                        // color: "white",
                                        // fontWeight:"800",
                                        textTransform: "uppercase",
                                        // padding: '10px',  // Optional: removes default padding
                                        // marginLeft: '90px',   // Optional: removes default margin
                                        resize: 'none', // Optional: disables resizing
                                        maxWidth: '100%',
                                        minWidth: "100%",
                                        height: "auto" // Optional: adjust height as needed
                                    }}
                                />
                                <div className="" style={{ visibility: "hidden", position: "relative", height: "10px" }}>
                                    TRAIN SMARTER AND FASTER THAN BEFORE
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <span style={{
                    color: 'var(--gray)',
                    fontWeight: "normal,"
                }}>
                    OUR PARTNERS
                </span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons