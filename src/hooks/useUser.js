import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetAuth } from "../rtk/slices/auth/auth";
const useUser = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const loggedUser = localStorage.getItem("loggedUser");

  useEffect(() => {
    if (loggedUser === false) {
      dispatch(resetAuth());
    }
  }, [token]);

  async function logout() {
    await localStorage.removeItem("token");
    await localStorage.removeItem("user");
    await localStorage.removeItem("loggedUser");
    await dispatch(resetAuth());
    await window.location.reload();
  }

  return { user, token, logout, loggedUser };
};

export default useUser;
