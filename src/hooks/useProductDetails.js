import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProduct,
  getProducts,
  getTotalRateProduct,
  rateProduct,
} from "../rtk/slices/product/product";
import { toast } from "react-toastify";

export const useProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState([]);
  const [rate, setRate] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const [doneRate, setDoneRate] = useState(false);
  const dispatch = useDispatch();



  const ratingChanged = async (Rating) => {
    setRate(Rating);
    try {
      const res = await dispatch(rateProduct({ id, Rating }));
      if (!res?.error?.name) {
        toast.success("thanks for rate");
        setDoneRate(true);
      } else {
        toast.error("please login");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  async function getAllProducts() {
    try {
      const result = await dispatch(getProducts());
      setProducts(result.payload.products);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function getAProduct() {
    try {
      const result = await dispatch(getProduct(id));
      const total = await dispatch(getTotalRateProduct(id));
      setTotalRate(total.payload.total);
      setProduct(result.payload.product);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getAllProducts();
    getAProduct();
  }, [ totalRate, rate]);
  return { product, totalRate, ratingChanged, doneRate, rate, products };
};
