import React from 'react';
import { Component } from 'react';

import './product.scss';

class Product extends Component {
  state = {
    showImage: false,
    counter: 0,
  }

  render() {
    const { id, name, price, imagePath } = this.props;

    return (
      <div className="card" key={id}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={imagePath} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <button className="button" onClick={() => {
                this.setState((state) => ({
                  showImage: !state.showImage,
                  counter: state.counter + 1,
                }));
              }}>
                {this.state.showImage ? 'Chowaj obrazek' : 'Pokaz obrazek'}
                {this.state.counter}
              </button>
              <p className={`product ${this.state.showImage ? 'visible' : ''}`}>{price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
