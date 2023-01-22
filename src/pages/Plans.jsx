import Header from "../components/Header";
import HeaderImage from '../assets/images/header_bg_4.jpg';
import Card from '../UI/Card';
import { plans } from "../data";

const Plans = () => {
  return (
      <> 
        <Header title='' image={HeaderImage} >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate dolorem ullam eius!
        </Header>
        <section className="plans">
          <div className="container plans__container">
            {
              plans.map(({id,name,desc,price,features})=> {
                return <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>features</h4>
                  {
                    features.map(({feature,available},index)=> {
                      return <p className={!available ? 'disabled' : ''} key={index}>{feature}</p>
                    })
                  }
                  <button className="btn lg">Choose Plan</button>
                </Card>
              })
            }
          </div>
        </section>
    </>
  )
}

export default Plans;