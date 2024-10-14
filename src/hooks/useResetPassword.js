import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { newPassword } from "../rtk/slices/auth/auth";

const useResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { userId, token } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const { loading, msg } = state;

  async function submit(e) {
    e.preventDefault();
    try {
      if (!password) return toast.error("please enter your password");
      if (password.length !== passwordConfirm.length)
        return toast.error("Passwords do NOT match");
      const result = await dispatch(newPassword({ password, userId, token }));
      if (result?.error) {
        toast.error(`${result?.error?.message} invalid`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return {
    submit,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    msg,
    loading,
    Link,
  };
};

export default useResetPassword;
