import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../rtk/slices/product/product";
import { getBlogs } from "../rtk/slices/blog/blog";

export const useProductsAndBlogs = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products).products
    .products;
  const blogsState = useSelector((state) => state.blogs).blogs.blogs;

  const fetchProducts = async () => {
    await dispatch(getProducts());
  };
  const fetchBlogs = async () => {
    await dispatch(getBlogs());
  };
  useEffect(() => {
    fetchProducts();
    fetchBlogs();
  }, []);
  return { productsState, blogsState };
};
