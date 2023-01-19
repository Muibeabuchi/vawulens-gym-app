import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import {FaFacebookF, FaLinkedin} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="footer logo" />
                </Link> 
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quas facilis ab quisquam assumenda ipsa voluptatum magnam quasi aliquam quae!
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/"
                        target='_blank' rel='noreferrer noopener'
                    ><FaLinkedin /></a>
                    <a href="https://facebook.com/"
                        target='_blank' rel='noreferrer noopener'
                    ><FaFacebookF /></a>
                    <a href="https://twitter.com/"
                        target='_blank' rel='noreferrer noopener'
                    ><AiOutlineTwitter /></a>
                    <a href="https://instagram.com/"
                        target='_blank' rel='noreferrer noopener'
                    ><AiFillInstagram /></a>
                </div>
            </article>
            <article>
                <h4>Permalimks</h4>
                <a href="/">About</a>
                <a href="/plans">Plans</a>
                <a href="/trainers">Trainers</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
            </article>
            <article>
                <h4>Insights</h4>
                <a href="/s">Blog</a>
                <a href="/s">Case studies</a>
                <a href="/s">Events</a>
                <a href="/s">Communities</a>
                <a href="/s">FAQs</a>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <a href="/contact">Contact Us</a>
                <a href="/s">Support</a>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 NERDKIDCHIKI &COPY; ALL RIGHTS RESERVED</small>
        </div>
    </footer>
  )
}

export default Footer