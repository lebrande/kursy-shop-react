import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';

const Main = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProductsList(products);
      });
  }, []);

  return (
    <>
      <Hero />
      {productsList.map(({ id, name, price }) => (
        <div key={id}>
          <h3>{name}</h3>
          <ul>
            <li>
              Cena: {price}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Main;