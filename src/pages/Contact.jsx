import Header from "../components/Header"
import HeaderImage from '../assets/images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';


const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa!
      </Header>
      <section className="contact"></section>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:chikimiracle2000@gmal.com" target='_blank' rel="noreferrer noopener"><MdEmail /></a>
          <a href="https://m.me/miracle.chiki" target='_blank' rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+2349154498129" target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </>
  )
}

export default Contact