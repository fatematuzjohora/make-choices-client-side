import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from "../../Pages/Home/Products/Product"

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div className=" mx-10 p-5">
      <div className=" grid gap-4 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
    );
};

export default AllProducts;