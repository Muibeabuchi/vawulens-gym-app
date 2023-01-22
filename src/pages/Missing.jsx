import {Link} from 'react-router-dom';

const Missing = () => {
  return (
    <section>
      <div className="container missing__container">
        <h2>Page Not Found</h2>
        ,<Link to='/' className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default Missing