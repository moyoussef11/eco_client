import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlogCategory } from "../rtk/slices/blogCategory/blogCategory";
import { toast } from "react-toastify";

const useAddCategoryBlog = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      await dispatch(addBlogCategory(title));
      toast.success("created successfully");
      nav("/dashboard/category-blogs");
    } catch (error) {
      throw new Error(error);
    }
  }
  return { submit, title, setTitle };
};

export default useAddCategoryBlog;
