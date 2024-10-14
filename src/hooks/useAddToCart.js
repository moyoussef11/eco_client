import { useState } from "react";
import useUser from "./useUser";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slices/product/product";
import { toast } from "react-toastify";

export const useAddToCart = () => {
  const { user, token } = useUser();
  
  const [quantity, setQuantity] = useState(1);
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const addToACart = async (userId, productId, quantity, price) => {
    try {
      if (!userId) return toast.error(`please log in`);
      if (token) {
        const result = await dispatch(
          addToCart({ userId, productId, quantity, price })
        );
        if (result?.payload?.msg) {
          return toast.success(`${result?.payload?.msg}`);
        }
        if (result?.error?.message) {
          return toast.error(`${result?.error?.message}`);
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return { quantity, setQuantity, state, addToACart, user };
};
