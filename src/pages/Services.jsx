import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
  const service = props.match.params.service;

  const services = [
    'www',
    'shop',
    'seo',
  ];

  return (
    <>
      {services.includes(service) ? (
        <p>Proponujemy usługę: {service}</p>
      ) : (
        <NavLink exact to="/">Wróć do strony głównej</NavLink>
      )}
    </>
  )
}

export default Services;