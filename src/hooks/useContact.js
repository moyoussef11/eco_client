import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../rtk/slices/contact/contact";
import { toast } from "react-toastify";

const useContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const stateContact = useSelector((state) => state.contacts);
  const { loading } = stateContact;

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await dispatch(
        addContact({ name, email, phone, message })
      );
      if (result?.payload?.status === "Success") {
        return toast.success(
          "Thank you for contacting us, waiting for the email response."
        );
      }
      if (result?.error?.message) {
        return toast.error(`${result.error.message}`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  return {
    submit,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    loading,
  };
};

export default useContact;
