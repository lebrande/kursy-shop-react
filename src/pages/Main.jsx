import React from 'react';
import Hero from '../components/Hero/Hero';
import { Component } from 'react';
import Product from '../components/Product/Product';

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
        {this.state.productsList.map((props) => (
          <Product {...props} key={props.id} />
        ))}
      </>
    );
  }
}

export default Main;