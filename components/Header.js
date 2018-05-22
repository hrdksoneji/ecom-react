import React, { Component } from 'react';

/*import images*/
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      response: ''
    };
    this.callSignIn = this.callSignIn.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callSignIn() {
    console.log('clicked');
    // <SignIn />;
  }

  render() {
    return (
      <div className="App">
        <h1 id="headerOfCompany">Clothes for men</h1>
        <input type="text" id="searchBar" placeholder="Search" />
        <span id="accountPara">
          <a href="../html/login.html"className="link" onClick={ this.callSignIn } >SignIn</a> 
          {/* <button className="link" onClick={this.callSignIn} >SignIn</button> */}
          | <a href="" className="link">Register</a></span>
        <span id="wishlist">
          <a href="" className="link">
            <img src={images['wishlisticon.png']} alt="wishlist" />
            <span >Wishlist</span>
          </a>
        </span>
        <span id="cart">
          <a href="" className="link">
            <img src={images['carticon.png']} alt="cart" />
            <span>Cart</span>
          </a>
        </span>
      </div>
    );
  }
}

export default Header;
