import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import customerSlice from "./slices/customer/customerSlice";
import productSlice from "./slices/product/productSlice";
import productCategorySlice from "./slices/productCategory/productCategorySlice";
import blogSlice from "./slices/blog/blogSlice";
import blogCategorySlice from "./slices/blogCategory/blogCategorySlice";
import couponSlice from "./slices/coupon/couponSlice";
import contactSlice from "./slices/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    customers: customerSlice,
    products: productSlice,
    productsCategory: productCategorySlice,
    blogs: blogSlice,
    blogsCategory: blogCategorySlice,
    coupons: couponSlice,
    contacts: contactSlice,
  },
});
