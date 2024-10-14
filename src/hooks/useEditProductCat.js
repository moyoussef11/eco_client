import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProductsCategory,
  getProductCategory,
  resetCatsProd,
} from "../rtk/slices/productCategory/productCategory";
import { toast } from "react-toastify";

const useEditProductCat = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsCategory);
  const nav = useNavigate();
  const { loading, productsCategory } = state;
  const [title, setTitle] = useState(productsCategory.title);

  useEffect(() => {
    dispatch(resetCatsProd());
    dispatch(getProductCategory(id));
  }, []);

  async function submit(e) {
    e.preventDefault();
    const result = await dispatch(editProductsCategory({ id, title }));
    if (result) {
      toast.success(result?.payload?.status);
      nav("/dashboard/categories");
    }
  }
  return { submit, title, setTitle, loading };
};

export default useEditProductCat;
