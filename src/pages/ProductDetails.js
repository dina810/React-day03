import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../network/axios";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => {
        console.log(res);
        setProductDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>ProductDetails</div>

      <h2>{productDetails.title}</h2>
      <p>{productDetails.description}</p>
      <small>Price : {productDetails.price}</small>
    </>
  );
}
