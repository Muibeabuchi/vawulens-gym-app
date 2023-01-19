import { useState } from "react";
import SectionHead from "./SectionHead";
import Card from '../UI/Card';
import {ImQuotesLeft} from 'react-icons/im';
import {IoIosArrowDropleft,IoIosArrowDropright} from 'react-icons/io';
import { testimonials } from "../data";

const Testimonials = () => {

    const [index,setIndex] = useState(0);
    const {quote,name,job,avatar} = testimonials[index];

    const nextTestimonialHandler=()=>{
        setIndex(prev=> prev+1)
        if(index >= testimonials.length-1){
            setIndex(0);
        }
    }
    function prevTestimonialHandler(){
        setIndex(prev=> prev - 1)
        if(index <= 0){
            setIndex(testimonials.length-1);
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft />} title='testimonials' className='testimonials__head'/>
            <Card className='testimonial'>
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial__quote">{`'${quote}'`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleft /></button>
                <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDropright /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials