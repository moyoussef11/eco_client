import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../rtk/slices/auth/auth";
import { toast } from "react-toastify";

const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const { loading } = state;

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await dispatch(resetPassword(email));
      if (!result.error) {
        toast.success(`${result?.payload?.msg}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { submit, email, setEmail, loading };
};

export default useForgotPassword;
