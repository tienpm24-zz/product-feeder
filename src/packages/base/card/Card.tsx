import './Card.sass'
import React from 'react';

type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: string;
};

const Card: React.FC<ProductProps> = (product) => {
  const { id, name, description, price } = product;
  return (
    <li className='card' key={id}>
      <div onClick={() => {}}>
        <div className='image'></div>
        <h2 className='name'>{name} </h2>

              <span>{description}</span>
              <p className='price'>{price}</p>
      </div>
    </li>
  );
};

export default Card;
