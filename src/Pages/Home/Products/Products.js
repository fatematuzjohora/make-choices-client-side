import useProducts from "../../../hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="mx-7">
      <div className=" my-7 flex justify-center items-center">
        <h1 className="text-2xl underline text-sky-300 ">Our Products</h1>
      </div>
      <div className=" grid gap-4 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
