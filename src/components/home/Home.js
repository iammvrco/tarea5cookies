import React from "react";
import Cookies from "universal-cookie";

import * as ReactBootStrap from "react-bootstrap";

class Home extends React.Component {
  async getCookies() {
    await fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=1861968&appid=70d9d6c29262d5e14b5462682cccc9ca"
    )
      .then((res) => res.json())
      .then((result) => {
        const cookie = new Cookies();
        cookie.set("Weather", result.weather[0].main);
        cookie.set("Temp", result.main.temp);
        cookie.set("City", result.name);
        cookie.set("Country", result.sys.country);
      });
  }

  render() {
    this.getCookies();

    return (
      <div className="text-center">
        <h1>Esta aplicación web proporciona el estado del tiempo</h1>
        <h1>En la ciudad de Ichikawa en Japón</h1>
        <br></br>
        <p>
          En esta página, consultamos una API para extraer el estado del tiempo
          en esta ciudad
        </p>
        <p>y la guardamos en las cookies.</p>
        <p>
          En la pagina "Ver el estado del tiempo" mostramos el estado del tiempo
          a través de las cookies.
        </p>

        <ReactBootStrap.Carousel>
          <ReactBootStrap.Carousel.Item>
            <img
              style={{height:"400px"}}
              src="https://i.pinimg.com/originals/dd/2e/9e/dd2e9ecc51520e3adf5e260d3f981d2b.jpg"
              alt="First slide"
            />
          </ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Carousel.Item>
            <img
              style={{height:"400px"}}
              src="https://cdn.pixabay.com/photo/2012/12/09/05/02/japan-69128_960_720.jpg"
              alt="Second slide"
            />

          </ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Carousel.Item>
            <img
              style={{height:"400px"}}
              src="https://otakusenvenezuela.files.wordpress.com/2019/10/ichikawa02.jpg"
              alt="Third slide"
            />
          </ReactBootStrap.Carousel.Item>
        </ReactBootStrap.Carousel>
      </div>
    );
  }
}

export default Home;
