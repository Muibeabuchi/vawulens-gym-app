import Header from '../components/Header';
import HeaderImage from '../assets/images/header_bg_1.jpg';
import AboutImage from '../assets/images/about1.jpg';
import VisionImage from '../assets/images/about2.jpg';
const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus veniam necessitatibus nam culpa possimus modi.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={AboutImage} alt="about section image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id eveniet exercitationem odit iste soluta.</p>
          </div>
        </div>
      </section>
      <section className="vvision__story">
        <div className="container vision__story-container">
          <div className="vision__section-content">
            <h1>Our Story</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ducimus similique dignissimos, neque ex odio cum, temporibus ipsa delectus iste ea, facilis magni nesciunt eius.</p>
          </div>
          <div className="vision__section-image">
            <img src={VisionImage} alt="about section image" />
          </div>

        </div>
      </section>
    </>
  )
}

export default About