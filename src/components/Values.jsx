import Image from '../assets/images/values.jpg';
import SectionHead from '../components/SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import{values } from '../data';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values image" />
                </div>
            </div>

            <div className="values__right">
                <SectionHead icon={<GiCutDiamond />} title='values' />
                <p>Welcome to our gym! We are a community of fitness enthusiasts dedicated to helping you achieve your health and wellness goals.</p>   
                <div className="values__wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return <Card className='values__value' key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values