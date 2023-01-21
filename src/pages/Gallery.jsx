import Header from "../components/Header";
import GalleryImage from '../assets/images/header_bg_3.jpg';
import {galleryImages} from '../data';

const Gallery = () => {
  return (
    <>
      <Header title='Our Gallery' image={GalleryImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, atque!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            galleryImages.map((image,index)=> {
              return(
                <article key={index}>
                  <img src={image} alt={`gallery_image_${index}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery