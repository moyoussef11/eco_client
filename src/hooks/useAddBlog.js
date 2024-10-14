import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlog, resetBlog } from "../rtk/slices/blog/blog";
import { toast } from "react-toastify";
import { getBlogsCategory } from "../rtk/slices/blogCategory/blogCategory";

const useAddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogs);
  const { error, loading } = state;
  const nav = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const stateCatBlog = useSelector((state) => state.blogsCategory);
  const { blogsCategory } = stateCatBlog;

  async function submit(e) {
    e.preventDefault();
    try {
      const result = await dispatch(
        addBlog({ title, description, selectedCategory })
      );
      if (!result?.error?.message) {
        toast.success("created successfully");
        nav("/dashboard/blogs");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    dispatch(resetBlog());
    dispatch(getBlogsCategory());

    if (error) {
      toast.error(`${error}`);
    }
  }, [error]);
  return {
    submit,
    title,
    setTitle,
    description,
    setDescription,
    loading,
    blogsCategory,
    setSelectedCategory,
  };
};

export default useAddBlog;
