import { useLoaderData, Link } from 'react-router-dom';
import Productstable from '../components/Productstable';
import { useState } from 'react';

function Products() {
  const [products, setProducts] = useState(useLoaderData());

  return (
    <div>
      <Productstable products={products} setProducts={setProducts} />
    </div>
  );
}

export default Products;

//loader function

function Card({ image, price, title, description, id }) {
  return (
    <div className="card max-w-[320px] bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <span className="text-lg font-semibold">{price}$</span>
        <Link to={id.toString()}>See Product overview</Link>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
