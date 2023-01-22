import Header from "../components/Header";
import HeaderImage from '../assets/images/header_bg_5.jpg';
import {trainers} from '../data';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Trainer from '../components/Trainer';


function Trainers() {
  return (
    <>
      <Header title='' image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor adipisci corporis non!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({id,name,image,job,socials})=> {
            return(
              <Trainer key={id} image={image}  name={name} job={job} socials={
                [
                  {icon:<BsInstagram />,link:socials[0]},
                  {icon:<AiOutlineTwitter />,link:socials[1]},
                  {icon:<FaFacebook />,link:socials[2]},
                  {icon:<FaLinkedinIn />,link:socials[3]}
                ]
              }/>
                

            )
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers