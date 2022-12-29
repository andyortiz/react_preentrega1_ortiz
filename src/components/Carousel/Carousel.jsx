import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const carousel = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://parentesis.com/imagesPosts/nova4principal800.jpg"
              alt="First slide"
              height={400}
            //   width={800}
            />
            <Carousel.Caption>
              <h3>Tu Tiendita</h3>
              <p>Los mejores teléfonos a tu alcance</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/b/banner-de-papel-curvo-con-inscripción-del-black-friday-y-despertador-rojo-realista-plantilla-etiqueta-vectores-para-publicidad-196355427.jpg"
              alt="Second slide"
              height={400}
            />
    
            <Carousel.Caption>
              <h3>Tu Tiendita</h3>
              <p>Relojes para ella y para el</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.yourstory.com/cs/2/d72b5ef09db411ebb4167b901dac470c/Imagerp78-1620136487496.jpg"
              alt="Third slide"
              height={400}
            />
    
            <Carousel.Caption>
              <h3>Tu Tiendita</h3>
              <p>Despacho gratis a todo el país</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default carousel