import React, { Component } from 'react';

class ProductsForm extends Component {
  state = {  }

  createProduct = (e) => {
    e.preventDefault();

    const product = {
      name: 'Bardzo ładna lampa 99',
      description: 'Wykonana za aluminum.',
      price: 49900,
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
            ---
          </div>
          <div className="panel-block">
            <button className="button is-link" onClick={(e) => {
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