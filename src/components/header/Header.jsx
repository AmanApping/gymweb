import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
import './Header.css';

const Header = ({ handleChange, Save, Edit, home_data }) => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const data = localStorage.getItem('data')
  const JSONFormate = JSON.parse(data)

  return (
    <div className="header">
      <textarea
        className="active"
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
          width: '30%',
          minHeight: "50px",// Optional: adjust width as needed
          maxHeight: '50px' // Optional: adjust height as needed
        }}
      />


      <div className='flex'>
        <button onClick={() => Edit()} type="button" className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
        <button onClick={() => Save()} type="button" className="save_button_ hidden focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
      </div>
      {menuOpened === false && mobile === true ? (
        <div style={{
          backgroundColor: 'var(--appColor)',
          padding: '0.5rem',
          borderRadius: '5px'
        }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{
              width: '1.5rem',
              height: '1.5rem'
            }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to='home'
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to='programs'
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='reasons'
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>

        </ul>
      )}
    </div>
  )
}

export default Header