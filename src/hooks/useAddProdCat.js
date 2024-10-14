import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addProductsCategory,
  resetCatsProd,
} from "../rtk/slices/productCategory/productCategory";
import { toast } from "react-toastify";

const useAddProdCat = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsCategory);
  const { error, loading } = state;
  const nav = useNavigate();
  const addProdCat = async (e) => {
    e.preventDefault();
    if (!title) return toast.error("title is required");
    const result = await dispatch(addProductsCategory(title));
    if (result.payload?.status == "Success") {
      toast.success("created successfully");
      nav("/dashboard/categories");
    }
  };

  useEffect(() => {
    dispatch(resetCatsProd());
  }, []);

  return { addProdCat, title, error, loading, setTitle };
};
export default useAddProdCat;
