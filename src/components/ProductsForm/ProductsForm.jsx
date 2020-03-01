import React, { Component } from 'react';

class ProductsForm extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
  }

  createProduct = (e) => {
    e.preventDefault();

    const product = {
      ...this.state,
      imagePath: '/images/retro-lampshade-1662061_640.jpg'
    };

    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((response) => response.json())
      .then((newProduct) => {
        console.log({ newProduct });
      })
  }

  render() {
    return (
      <form>
        <div className="panel">
          <p className="panel-heading">
            Dodaj produkt
          </p>
          <div className="panel-block is-active">
            <input
              className="input"
              type="text"
              placeholder="Nazwa"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="panel-block is-active">
            <input
              className="input"
              type="text"
              placeholder="Opis"
              value={this.state.description}
              onChange={(e) => {
                this.setState({
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className="panel-block is-active">
            <input
              className="input"
              type="text"
              placeholder="Cena"
              value={this.state.price}
              onChange={(e) => {
                this.setState({
                  price: e.target.value,
                });
              }}
            />
          </div>
          <div className="panel-block">
            <button type="submit" className="button is-link" onClick={(e) => {
              this.createProduct(e);
            }}>
              Dodaj produkt
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ProductsForm;