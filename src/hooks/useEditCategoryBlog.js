import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogCategory,
  updateBlogCategory,
} from "../rtk/slices/blogCategory/blogCategory";
import { toast } from "react-toastify";

const useEditCategoryBlog = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogsCategory);
  const { error } = state;
  const { id } = useParams();
  const nav = useNavigate();

  async function getABlogCat(id) {
    const result = await dispatch(getBlogCategory(id));
    setTitle(result?.payload?.category?.title);
  }

  async function submit(e) {
    e.preventDefault();
    try {
      if (!title) return toast.error("title is required");
      const result = await dispatch(updateBlogCategory({ id, title }));
      if (!result.error) {
        toast.success("updated successfully");
        nav("/dashboard/category-blogs");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(`${error}`);
    }
    getABlogCat(id);
  }, []);

  return { submit, title, setTitle };
};

export default useEditCategoryBlog;
