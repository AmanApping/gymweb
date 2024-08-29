import React, { useState, useEffect } from 'react'
import './Footer.css'

import Instagram from '../../assets/contact_us/instagram.png'
import Facebook from '../../assets/contact_us/facebook.png'
import Phone from '../../assets/contact_us/phone.png'
import Email from '../../assets/contact_us/email.png'
import Logo from '../../assets/logo.png';
import AddContact from '../AddContact'

const Footer = (handleChange, home_data) => {
  const data = localStorage.getItem('data')
  const [open, setOpen] = useState(false)
  const JSONFormate = JSON.parse(data)
  const [contact_me, setContact_me] = useState(() => {
    const savedData = localStorage.getItem('contact_gym');
    return savedData ? JSON.parse(savedData) :
      [
        {
          label: "Instagram",
          icon: Instagram,
          link: "mailto:abc@gmail.com",
        },
        {
          label: "Facebook",
          icon: Facebook,
          link: "https://www.linkedin.com",
        },
        {
          label: "Phone",
          icon: Phone,
          link: "https://github.com",
        },
        {
          label: "Email",
          icon: Email,
          link: "https://x.com",
        },
      ]

  })

  useEffect(() => {
    localStorage.setItem('contact_gym', JSON.stringify(contact_me));
  }, [contact_me]);
  const handleChange_ = (index, field, value) => {
    const newExperiences = [...contact_me];
    newExperiences[index][field] = value;
    setContact_me(newExperiences);
  };
  const handleRemoveEx = (index) => {
    setContact_me((prevItems) => prevItems.filter((_, itemIndex) => itemIndex !== index))

  }

  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <div className=" py-6 px-4 flex flex-wrap items-center sm:justify-center gap-1">
            {contact_me?.map((element, index) => {
              return (
                <div>
                  <div className="cancle_icon hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                      onClick={() => handleRemoveEx(index)} // Click handler to remove image
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <a key={index} href={element.link} target="_blank" rel="noreferrer">

                    <div className="flex flex-wrap items-center gap-2">
                      <img style={{ color: "white" }} src={element.icon} className="h-7 object-contain rounded-lg active" />
                      {/* <div
                      className=" text-sm border-b-2 border-dotted border-[#37bbf8] hover:text-[#37bbf8] hover:border-0 font-semibold active"> */}
                      <textarea
                        className="active"
                        onChange={(e) => handleChange_(index, 'label', e.target.value)}
                        name="label"
                        style={{
                          overflow: "hidden",
                          background: 'transparent',
                          border: 'none',
                          fontSize: "15px",
                          padding: '10px',  // Optional: removes default padding
                          margin: '0',   // Optional: removes default margin
                          resize: 'none', // Optional: disables resizing
                          width: 'auto', // Optional: adjust width as needed
                          height: '40px' // Optional: adjust height as needed
                        }}
                        defaultValue={element?.label}
                      >

                      </textarea>
                    </div>
                  </a>
                </div>
              );
            })}
            <AddContact contact_me={contact_me} setContact_me={setContact_me} open={open} setOpen={setOpen} />
            <button className="active  cancle_icon hidden" onClick={() => setOpen(!false)}>Add more</button>
          </div>
        </div>
        <div className="logo-f">
          <textarea
            className="active text-center"
            defaultValue={JSONFormate?.nav_title ? JSONFormate?.nav_title : home_data?.nav_title}
            onChange={handleChange}
            name="nav_title"
            style={{
              background: 'transparent',
              overflow: "hidden",
              border: 'none',
              fontSize: "30px",
              color: "white",
              fontWeight: "800",
              padding: '10px',  // Optional: removes default padding
              margin: '0',   // Optional: removes default margin
              resize: 'none', // Optional: disables resizing
              width: '100%',
              minHeight: "50px",// Optional: adjust width as needed
              maxHeight: '50px' // Optional: adjust height as needed
            }}
          />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer


// import React, { useState, useEffect } from "react";
// import email from "../assets/contact/email.png";
// import linkedin from "../assets/contact/linkedin.png";
// import twitter from "../assets/contact/twitter.png";
// import github from "../assets/github.png";
// import facebook from '../assets/contact/facebook.png'
// import call from '../assets/contact/phone.png'
// import AddContact from "./Dialog_to_add_con";


// function Contact({ handleChange, home_data, removeSection }) {
//   const [open, setOpen] = useState(false)
//   const data = localStorage.getItem('data')
//   const JSONFormate = JSON.parse(data)
//   const [contact_me, setContact_me] = useState(() => {
//     const savedData = localStorage.getItem('contact');
//     return savedData ? JSON.parse(savedData) :
//       [
//         {
//           label: "abc@gmail.com",
//           icon: email,
//           link: "mailto:abc@gmail.com",
//         },
//         {
//           label: "LinkedIn",
//           icon: linkedin,
//           link: "https://www.linkedin.com",
//         },
//         {
//           label: "Github",
//           icon: github,
//           link: "https://github.com",
//         },
//         {
//           label: "@xprofile",
//           icon: twitter,
//           link: "https://x.com",
//         },
//       ]

//   })

//   console.log(contact_me, 'this is contect me')

//   useEffect(() => {
//     localStorage.setItem('contact', JSON.stringify(contact_me));
//   }, [contact_me]);
//   const handleChange_ = (index, field, value) => {
//     const newExperiences = [...contact_me];
//     newExperiences[index][field] = value;
//     setContact_me(newExperiences);
//   };
//   const handleRemoveEx = (index) => {
//     setContact_me((prevItems) => prevItems.filter((_, itemIndex) => itemIndex !== index))

//   }

//   return (
//     <div className="md:w-10/12 w-11/12 mx-auto text-white py-14 pb-24" id="contact">
//       <div className="cancle_icon hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//           onClick={() => removeSection({ "contact": false })} // Click handler to remove image
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </div>
//       <div className="font-bold text-xl text-[#37bbf8] pb-6">
//         <textarea
//           className="active"
//           onChange={handleChange}
//           name="contact"
//           style={{
//             textAlign: "left",
//             overflow: "hidden",
//             background: 'transparent',
//             border: 'none',
//             fontSize: "24px",
//             padding: '10px',  // Optional: removes default padding
//             margin: '0',   // Optional: removes default margin
//             resize: 'none', // Optional: disables resizing
//             width: '100%', // Optional: adjust width as needed
//             height: '40px' // Optional: adjust height as needed
//           }}
//           defaultValue={JSONFormate?.contact ? JSONFormate?.contact : home_data?.contact}
//         >

//           {/* {pronoun} */}
//         </textarea>
//       </div>
//       <div className="sm:w-3/4 w-10/12 mx-auto shadow-lg rounded-lg">
//         <div className="bg-[#1f2945] rounded-lg py-6 px-4 flex flex-wrap items-center sm:justify-center gap-6">
//           {contact_me?.map((element, index) => {
//             return (
//               <div>
//                 <div className="cancle_icon hidden">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="size-4"
//                     onClick={() => handleRemoveEx(index)} // Click handler to remove image
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </div>

//                 <a key={index} href={element.link} target="_blank" rel="noreferrer">

//                   <div className="flex flex-wrap items-center gap-2">
//                     <img style={{ color: "white" }} src={element.icon} className="h-7 object-contain rounded-lg active" />
//                     {/* <div
//                       className=" text-sm border-b-2 border-dotted border-[#37bbf8] hover:text-[#37bbf8] hover:border-0 font-semibold active"> */}
//                     <textarea
//                       className="active"
//                       onChange={(e) => handleChange_(index, 'label', e.target.value)}
//                       name="label"
//                       style={{
//                         overflow: "hidden",
//                         background: 'transparent',
//                         border: 'none',
//                         fontSize: "15px",
//                         padding: '10px',  // Optional: removes default padding
//                         margin: '0',   // Optional: removes default margin
//                         resize: 'none', // Optional: disables resizing
//                         // width: '100%', // Optional: adjust width as needed
//                         height: '40px' // Optional: adjust height as needed
//                       }}
//                       defaultValue={element?.label}
//                     >

//                     </textarea>
//                   </div>
//                 </a>
//               </div>
//             );
//           })}
//           <AddContact contact_me={contact_me} setContact_me={setContact_me} open={open} setOpen={setOpen} />
//           <button className="active btn btn-active cancle_icon hidden" onClick={() => setOpen(!false)}>Add more</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
