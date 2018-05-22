import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.imgUrl} alt="no image" />
                    <br/>
                    <label style={{textDecoration:'bold', color:'#0066c0'}}>{this.props.title}</label>
                    <br/>
                    <label style={{color:'#B12704'}}>{this.props.price}</label>
                </div>
                <div>
                    <img src={this.props.imgUrl} alt="no image" />
                    <br/>
                    <label style={{textDecoration:'bold', color:'#0066c0'}}>{this.props.title}</label>
                    <br/>
                    <label style={{color:'#B12704'}}>{this.props.price}</label>
                </div>
            </div>
        );
    }
}

export default Product;
