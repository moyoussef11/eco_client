import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../rtk/slices/product/product";
import { toast } from "react-toastify";
import useUser from "./useUser";

export const useCart = () => {
  const state = useSelector((state) => state.products);
  const { token } = useUser();
  const dispatch = useDispatch();
  const fetchCart = async () => {
    await dispatch(getCart());
  };

  const deleteFromCart = async (id) => {
    const result = await dispatch(deleteCart(id));
    if (result.payload.msg) {
      toast.success(`${result.payload.msg}`);
      fetchCart();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCart();
  }, [token]);
  return { state, deleteFromCart };
};
