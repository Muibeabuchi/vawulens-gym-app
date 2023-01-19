import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import {links} from '../data';
import {FaBars} from 'react-icons/fa';
import {MdOutlineClose} from 'react-icons/md';


const Navbar = () => {
  const [showIcon,setShowIcon] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo' onClick={()=>setShowIcon(false)}>
          <img src={Logo} alt="nav logo" />
        </Link>
        <ul className={`nav__links ${showIcon ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({path,name},index)=>{
              return(
                <li key={index}>
                  <NavLink to={path} onClick={()=> setShowIcon(false)} className={({isActive})=> isActive ? 'active__link' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={()=>setShowIcon(prev=>!prev)}>
          {
            showIcon ? <MdOutlineClose /> : <FaBars />
          }
          {/* <FaBars />   */}
        </button>
      </div>
    </nav>
  )
}

export default Navbar;