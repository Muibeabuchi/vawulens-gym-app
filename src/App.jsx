import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {About, Home, Gallery, Contact, Missing, Plan, Trainers} from './pages';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/plans' element={<Plan />} />
        <Route path='/trainers' element={<Trainers/>} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
