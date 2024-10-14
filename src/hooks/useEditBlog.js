import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlog,
  resetBlog,
  updateBlog,
  updateBlogImage,
} from "../rtk/slices/blog/blog";
import { toast } from "react-toastify";

const useEditBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState({});
  const { id } = useParams();
  const state = useSelector((state) => state.blogs);
  const { error } = state;
  const dispatch = useDispatch();
  const nav = useNavigate();

  async function getABlog(id) {
    try {
      const result = await dispatch(getBlog(id));
      setTitle(result.payload.blog.title);
      setDescription(result.payload.blog.description);
      setCategory(result.payload.blog.category);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updateImage(id, image) {
    await dispatch(updateBlogImage({ id, image }));
  }

  useEffect(() => {
    dispatch(resetBlog());
    if (error) {
      toast.error(`${error}`);
    }
    getABlog(id);
  }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      //   send Data
      const result = await dispatch(
        updateBlog({ id, title, description, category })
      );
      if (!result.payload.error) {
        toast.success("updated successfully");
        nav("/dashboard/blogs");
      }
      updateImage(id, image);
    } catch (error) {
      throw new Error(error);
    }
  }
  return {
    submit,
    title,
    setTitle,
    setImage,
    setCategory,
    setDescription,
    description,
    category,
  };
};

export default useEditBlog;
