import { useEffect, useState } from "react";
import { createProduct, resetProduct } from "../rtk/slices/product/product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCategory } from "../rtk/slices/productCategory/productCategory";

const useAddProduct = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    quantity: "",
    brand: "",
    color: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const [images, setImages] = useState([]);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const { msg, error, created, loading } = state;

  const stateCatProduct = useSelector((state) => state.productsCategory);
  const { productsCategory } = stateCatProduct;

  // handleInputs
  function handleForm(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    if (!data.title)
      return toast.error("title is required", { position: "top-center" });
    if (!data.description)
      return toast.error("description is required", {
        position: "top-center",
      });
    if (!data.quantity)
      return toast.error("quantity is required", {
        position: "top-center",
      });
    if (!data.price)
      return toast.error("price is required", { position: "top-center" });
    if (!selectedCategory)
      return toast.error("category is required", { position: "top-center" });
    if (!data.color)
      return toast.error("color is required", {
        position: "top-center",
      });
    if (!data.brand)
      return toast.error("brand is required", {
        position: "top-center",
      });
    try {
      // uploadImages
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      await formData.append("title", data.title);
      await formData.append("price", data.price);
      await formData.append("description", data.description);
      await formData.append("quantity", data.quantity);
      await formData.append("category", selectedCategory);
      await formData.append("brand", data.brand);
      await formData.append("color", data.color);
      const result = await dispatch(createProduct(formData));
      if (result?.error?.message) {
        return nav("");
      }
      nav("/dashboard/products");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(resetProduct());
    dispatch(getProductsCategory());
    if (created && !error) {
      toast.success(`${msg?.msg}`, { position: "top-center" });
    } else if (error) {
      toast.error(`${error}`, { position: "top-center" });
    }
  }, [created, error, msg, loading]);

  return {
    data,
    submit,
    handleForm,
    images,
    setImages,
    loading,
    productsCategory,
    setSelectedCategory,
    selectedCategory,
  };
};

export default useAddProduct;
