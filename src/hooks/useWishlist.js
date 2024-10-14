import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../rtk/slices/customer/customer";
import { toast } from "react-toastify";
import { addToWishlist } from "../rtk/slices/product/product";
import useUser from "./useUser";

export const useWishlist = () => {
  const state = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const { error, users } = state;
  const { id } = useParams();
  const { token } = useUser();

  const fetchUser = useCallback(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUser();
    if (error) {
      toast.error(`${error}`);
    }
  }, [token, error]);

  const removeToWishlist = async (id) => {
    try {
      const result = await dispatch(addToWishlist(id));
      if (result.payload.msg) {
        await fetchUser();
        toast.success(`${result.payload.msg}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { users, token, removeToWishlist };
};
