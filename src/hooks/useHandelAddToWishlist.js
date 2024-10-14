import { useDispatch } from "react-redux";
import { addToWishlist } from "../rtk/slices/product/product";
import { toast } from "react-toastify";

export const useHandelAddToWishlist = () => {
  const dispatch = useDispatch();

  const handelAddToWishlist = async (id) => {
    try {
      const result = await dispatch(addToWishlist(id));
      if (result?.payload?.msg === "added to wishlist successfully") {
        toast.success(`${result?.payload?.msg}`);
      } else if (result?.payload?.msg === "removed to wishlist successfully") {
        toast.warn(`${result?.payload?.msg}`);
      }
      if (result?.error?.name) {
        toast.error("You must be logged in");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return { handelAddToWishlist };
};
