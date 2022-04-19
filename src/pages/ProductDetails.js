import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LangugaeContext from "../context/language";
import axiosInstance from "../network/axios";

export default function ProductDetails() {
  const { lang, setLang } = useContext(LangugaeContext);
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => {
        setProductDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      ProductDetails
      <h2>Context language : {lang}</h2>
      <button
        className="btn btn-success"
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      >
        Change context lang
      </button>
      {isLoading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <h2>{productDetails.title}</h2>
          <p>{productDetails.description}</p>
          <small>Price : {productDetails.price}</small>
        </>
      )}
    </div>
  );
}
