import "./App.css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

import { register } from "swiper/element/bundle";

function App() {
  register();

  /*  const slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; */

  const slides = [
    {
      slide: "1.jpg",
      title: "Nature",
      description: "Estampados",
    },
    {
      slide: "2.jpg",
      title: "Nature",
      description: "En Camisas, Tazas...",
    },
  ];

  const gallery = slides.map((item, idx) => {
    return (
      <swiper-slide key={idx}>
        <div className="gallery-container">
          <img className="gallery-img" src={item.slide} alt="" />
          {/* <h1 className="gallery-text">{item.description}</h1> */}
        </div>
      </swiper-slide>
    );
  });

  return (
    <>
      <swiper-container
        slides-per-view="2"
        speed="1000"
        loop="true"
        autoplay="true"
        autoplay-delay="5000"
        cssMode="true"
        effect="fade"
      >
        {gallery}
      </swiper-container>
    </>
  );
}

export default App;
