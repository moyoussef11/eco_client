import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL, PRODUCTS, UPLOAD } from "../utils/API";
import axios from "axios";
import { toast } from "react-toastify";
import useUser from "./useUser";

const useEditProduct = () => {
  const { token } = useUser();
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
    brand: "",
    color: "",
  });
  const [images, setImages] = useState([]);
  const nav = useNavigate();
  const { id } = useParams();

  const getProduct = async (id) => {
    try {
      const res = await axios.get(`${BASEURL}/${PRODUCTS}/${id}`);
      setData({
        title: res.data.product.title,
        price: res.data.product.price,
        description: res.data.product.description,
        quantity: res.data.product.quantity,
        category: res.data.product.category,
        brand: res.data.product.brand,
        color: res.data.product.color,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // updateImages
  const handleUpdateImages = async () => {
    try {
      if (images.length > 0) {
        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
        await axios.put(`${BASEURL}/${PRODUCTS}/${id}/${UPLOAD}`, formData, {
          headers: { Authorization: "Bearer " + token },
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

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
    if (!data.category)
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
      await axios.patch(`${BASEURL}/${PRODUCTS}/${id}`, data, {
        headers: { Authorization: "Bearer " + token },
      });
      await handleUpdateImages();
      toast.success("updated successfully");
      nav("/dashboard/products");
    } catch (error) {
      throw new Error(error);
    }
  }
  return {
    submit,
    handleForm,
    data,
    images,
    setImages,
  };
};

export default useEditProduct;
