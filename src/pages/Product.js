import React from "react";
import  { useEffect, useState } from "react";
import ProductCard from "./../components/ProductCard";
import axiosInstance from "../network/axios";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance
      //   .post(
      //     "https://fakestoreapi.com/products",
      //     {
      //       id: 1,
      //       name: "dina",
      //     },
      //     {
      //       params: {
      //         id: 2,
      //       },
      //       headers: {},
      //     }
      //   )
      .get("/products")
      .then((res) => setProducts(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Products List</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => {
          return (
            <div className="col mb-4" key={product.id}>
              <ProductCard data={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
