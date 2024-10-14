import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getCoupon,
  resetCoupon,
  updateCoupon,
} from "../rtk/slices/coupon/coupon";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useEditCoupon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.coupons);
  const { id } = useParams();
  const { error } = state;
  const [title, setTitle] = useState("");
  const [expiry, setExpiry] = useState("");
  const [discount, setDiscount] = useState("");
  const nav = useNavigate();
  async function getACoupon(id) {
    try {
      const result = await dispatch(getCoupon(id));
      setTitle(result.payload.coupon.name);
      setDiscount(result.payload.coupon.discount);
      setExpiry(result.payload.coupon.expiry);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await dispatch(
        updateCoupon({ id, title, expiry, discount })
      );
      if (result) {
        toast.success(`updated successfully`);
        nav("/dashboard/coupons");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    dispatch(resetCoupon());
    getACoupon(id);
    if (error) {
      toast.error(`${error}`);
    }
  }, []);
  return {
    submit,
    title,
    setTitle,
    expiry,
    setExpiry,
    discount,
    setDiscount,
  };
};

export default useEditCoupon;
