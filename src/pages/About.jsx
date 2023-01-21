import Header from '../components/Header';
import HeaderImage from '../assets/images/header_bg_1.jpg';
import StoryImage from '../assets/images/about1.jpg';
import VisionImage from '../assets/images/about2.jpg';
import MissionImage from '../assets/images/about3.jpg';


const About = () => {



  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus veniam necessitatibus nam culpa possimus modi.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="mission image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id eveniet exercitationem odit iste soluta.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision image" />
          </div>

        </div>
      </section>

      <section className="about__story">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission image" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id eveniet exercitationem odit iste soluta.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About