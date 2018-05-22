import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SimpleSlider from './SimpleSlider';
import '../css/custom.css';
import Product from './Product';
/*import images*/
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

class Home extends Component {

  render() {
    return (
      
      <div>
        <Header />
        <div className="slider" style={{ height: "300px", width: "95%", border: "dotted" }}>
          <SimpleSlider />  
        </div>
        <br />
        <div className="flex-container" style={{ width: "95%" }}>
          <div style={{ flexBasis: "1200px", border: "dotted", height: "1000px" }}>
            <div className="product">
                <Product imgUrl={images['product1.jpg']} title="Test" review="5-star" price="$50" />
            </div>  
          </div>
          <div style={{ flexBasis: "200px", border: "dotted", height: "1000px" }}>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
