import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createCoupon, resetCoupon } from "../rtk/slices/coupon/coupon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAddCoupon = () => {
  const [title, setTitle] = useState("");
  const [expiry, setExpiry] = useState("");
  const [discount, setDiscount] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.coupons);
  const { error, loading } = state;
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const result = await dispatch(createCoupon({ title, expiry, discount }));
    if (result) {
      toast.success("created successfully");
      nav("/dashboard/coupons");
    }
  }

  useEffect(() => {
    dispatch(resetCoupon());
  }, [dispatch]);
  return {
    submit,
    title,
    setTitle,
    error,
    expiry,
    setExpiry,
    discount,
    setDiscount,
    loading,
  };
};

export default useAddCoupon;
