import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Product from '../../components/Product/Product';
import ProductsForm from '../../components/ProductsForm/ProductsForm';

class HomePage extends Component {
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

  appendNewProduct = (product) => {
    this.setState((state) => ({
      productsList: [
        ...state.productsList,
        product,
      ],
    }))
  }

  render() {
    return (
      <>
        <Hero />
        <div className="container">
          <ProductsForm />
        </div>
        <div className="container">
          <div className="columns is-multiline">
            {this.state.productsList.map((props) => (
              <div className="column is-4" key={props.id}>
                <Product {...props} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;