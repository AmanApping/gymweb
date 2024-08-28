import './App.css';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import HeroSection from './components/hero-section/HeroSection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
// import Testimonials from './components/testimonials/Testimonials';

function App() {
  const [home_data, setHome_data] = useState(
    {

      expert_coachs: "Ipsum",
      fitness_programs: "Ipsum",
      footer: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      footer_text_gym_1: "YOUR BODY READY TO",
      greetings: "Hello...",
      ideal_body: "versions of Lorem Ipsum",
      lading_des: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      level_up_1: "LEVEL UP",
      location: "Ahmdabad, gujrat, 908909",
      members: "Ipsum",
      name: "It's me John",
      nav_sub_title: "Ipsum",
      nav_title: "NAME",
      now_with_us: "including versions of Lorem Ipsum.",
      programs: "Programs",
      project_title: "Projects",
      ready_to_start: "including versions of Lorem Ipsum.",
      shape: "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      skills: "Web development, Javascript",
      some_reason_1: "like Aldus",
      some_reason_2: "like Aldus PageMaker including versions of Lorem Ipsum.",
      some_reason_3: "like Aldus PageMaker including versions of Lorem Ipsum.",
      some_reason_4: "like Aldus PageMaker including versions of Lorem Ipsum.",
      some_reasons: "Why us",
      to_shape_you: "Ipsum",
      why: "Ipsum",
      withus: "WITH US?",
      your: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      your_journey: "Plans"

    })

  const cancelIconElements = document.getElementsByClassName('cancle_icon');
  const activeElements = document.getElementsByClassName('active');

  const Edit = () => {

    // Loop through active elements to apply the border style
    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].style.border = '1px solid gray';
    }
    // Loop through cancel icon elements to show them
    for (let i = 0; i < cancelIconElements.length; i++) {
      cancelIconElements[i].style.display = 'block';
    }
  };


  const Edit_Remove = () => {
    const activeElements = document.getElementsByClassName('active');
    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].style.border = 'none';
    }
    for (let i = 0; i < cancelIconElements.length; i++) {
      cancelIconElements[i].style.display = 'none';
    }
    // window.location.reload(true)

  }

  const handleChange = (e) => {
    const newState = { ...home_data, [e.target.name]: e.target.value };
    setHome_data(newState);
    console.log(e.target.value)
  };

  const Save = () => {
    Edit_Remove()
    const stringData = localStorage.getItem('data');
    const JsonData = JSON.parse(stringData);
    if (JsonData) {
      for (const key in home_data) {
        if (home_data.hasOwnProperty(key)) {
          if (home_data[key] !== '' && JsonData[key] !== '') {
            JsonData[key] = home_data[key];
          }
        }
      }
      localStorage.setItem('data', JSON.stringify(JsonData));
    } else {
      localStorage.setItem('data', JSON.stringify(home_data));
    }
  };

  return (
    <div className="App">
      <HeroSection handleChange={handleChange} Save={Save} Edit={Edit} home_data={home_data}/>
      <Programs handleChange={handleChange} home_data={home_data} />
      <Reasons handleChange={handleChange} home_data={home_data} />
      <Plans handleChange={handleChange} home_data={home_data} />
      {/* <Testimonials handleChange={handleChange} home_data={home_data}/> */}
      <Join handleChange={handleChange} home_data={home_data} />
      <Footer handleChange={handleChange} home_data={home_data} />
    </div>
  );
}

export default App;
