import {Link} from 'react-router-dom';
import Image from '../assets/images/main_header.png';

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100daysofworkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          
          <p> Our state-of-the-art facility is equipped with the latest equipment and staffed by certified personal trainers who are passionate about helping you reach your full potential.</p>
          <Link to='/about' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="main header image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader