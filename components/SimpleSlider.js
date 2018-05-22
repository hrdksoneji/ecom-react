import React, { Component }  from "react";
import Slider from "react-slick";
/*import images*/
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
            <img src={images['slide1.jpg']} alt="wishlist" />
        </div>
        <div>
            <img src={images['slide2.jpg']} alt="wishlist" />
        </div>
        <div>
            <img src={images['slide3.jpg']} alt="wishlist" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;