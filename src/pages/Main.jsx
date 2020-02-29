import React from 'react';
import Hero from '../components/Hero/Hero';
import { Component } from 'react';

class Main extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    fetch('http://localhost:4000/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          productsList: data,
        })
      });
  }

  render() {
    return (
      <>
        <Hero />
        {this.state.productsList.map(({ id, name, price, imagePath }) => (
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
                  <p className="subtitle is-6">{price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Main;