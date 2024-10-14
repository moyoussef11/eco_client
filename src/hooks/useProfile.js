import { useState } from "react";
import { useDispatch } from "react-redux";
import useUser from "./useUser";
import { toast } from "react-toastify";
import { editUser } from "../rtk/slices/customer/customer";

const useProfile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useUser();

  async function submit(e) {
    e.preventDefault();
    if (!user?._id) return toast.error("log in please");
    if (!username) return toast.error("username is empty please fill input");
    if (!password) return toast.error("password is empty please fill input");
    const result = await dispatch(
      editUser({ id: user?._id, username, password })
    );
    if (result?.payload?.status === "Success") {
      toast.success("updated successfully");
    }
  }
  return { submit, username, setUsername, password, setPassword };
};

export default useProfile;
