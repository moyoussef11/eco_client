import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import SignUp from "./pages/Auth/SignUp";
import ResetPassword from "./pages/Auth/ResetPassword";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import Index from "./components/Dashboard/Dashboard";
import Products from "./components/Dashboard/Product/Products";
import Customer from "./components/Dashboard/Customer/Customer";
import Blogs from "./components/Dashboard/Blog/Blogs";
import AddProduct from "./components/Dashboard/Product/AddProduct";
import Coupons from "./components/Dashboard/Coupon/Coupons";
import AddCoupon from "./components/Dashboard/Coupon/AddCoupon";
import Categories from "./components/Dashboard/Product/Categories";
import AddCategory from "./components/Dashboard/Product/AddCategory";
import Orders from "./components/Dashboard/Product/Orders";
import AddBlog from "./components/Dashboard/Blog/AddBlog";
import CategoryBlogs from "./components/Dashboard/Blog/CategoryBlogs";
import AddCategoryBlog from "./components/Dashboard/Blog/AddCategoryBlog";
import VerificationEmail from "./pages/Auth/VerificationEmail";
import EditProduct from "./components/Dashboard/Product/EditProduct";
import EditCat from "./components/Dashboard/Product/EditCat";
import EditCoupon from "./components/Dashboard/Coupon/EditCoupon";
import EditBlog from "./components/Dashboard/Blog/EditBlog";
import EditCategoryBlog from "./components/Dashboard/Blog/EditCategoryBlog";
import Product from "./pages/Product";
import Contacts from "./components/Dashboard/Contact/Contacts";
import { Cart } from "./pages/Cart";
import Profile from "./pages/Profile";
import RequireAuth from "./middlewares/RequireAuth";
import IsAdmin from "./middlewares/IsAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route element={<RequireAuth />}>
              <Route path="profile" element={<Profile />} />
              <Route path="wishlist/:id" element={<Wishlist />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="store" element={<OurStore />} />
            <Route path="product-details/:id" element={<Product />} />
            <Route path="compare-products" element={<CompareProduct />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path=":userId/verify/:token"
              element={<VerificationEmail />}
            />
            <Route
              path="reset-password/:userId/:token"
              element={<ResetPassword />}
            />
          </Route>
          <Route element={<RequireAuth />}>
            <Route element={<IsAdmin />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Index />} />
                <Route path="customers" element={<Customer />} />
                <Route path="products" element={<Products />} />
                <Route path="edit-product/:id" element={<EditProduct />} />
                <Route path="edit-product-Cat/:id" element={<EditCat />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="coupons" element={<Coupons />} />
                <Route path="add-coupon" element={<AddCoupon />} />
                <Route path="edit-coupon/:id" element={<EditCoupon />} />
                <Route path="categories" element={<Categories />} />
                <Route path="add-category" element={<AddCategory />} />
                <Route path="orders" element={<Orders />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="add-blog" element={<AddBlog />} />
                <Route path="edit-blog/:id" element={<EditBlog />} />
                <Route path="category-blogs" element={<CategoryBlogs />} />
                <Route
                  path="edit-category-blog/:id"
                  element={<EditCategoryBlog />}
                />
                <Route path="add-category-blog" element={<AddCategoryBlog />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
