import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, resetAuth } from "../../rtk/slices/auth/auth";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { error, loading, msg } = auth;
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    if (!username)
      return toast.error("username is required", {
        position: "top-center",
      });
    if (!address)
      return toast.error("username is required", {
        position: "top-center",
      });
    if (username.length <= 2)
      return toast.error("username must be greater than 2 character", {
        position: "top-center",
      });
    if (!email)
      return toast.error("email is required", {
        position: "top-center",
      });
    if (!password)
      return toast.error("password is required", {
        position: "top-center",
      });
    if (password.length <= 8)
      return toast.error("password is must be greater than 8 character", {
        position: "top-center",
      });
    await dispatch(register({ username, email, password, address }));
  }

  useEffect(() => {
    dispatch(resetAuth());
    if (msg !== null) {
      toast.success(`${msg}`, {
        position: "top-center",
      });
      nav("/login");
    }
    if (loading == "succeeded") {
      nav("/login");
    }
  }, [error, loading, msg]);

  return (
    <>
      <BreadCrumb title={"Sign Up"} />
      <div className="py-5 bg-slate-100 paddingX relative">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  max-w-3xl mx-auto bg-white shadow-lg">
          <h5 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
            sign up
          </h5>
          <form onSubmit={submit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="username"
                value={username}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                placeholder="name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                placeholder="name@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error ? (
              <p className="text-sm capitalize text-red-500">{error}</p>
            ) : (
              ""
            )}
            <div className="flex items-center justify-between"></div>
            <button
              type="submit"
              className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              sign up
            </button>
            <p className="text-sm font-light text-gray-500">
              already have account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline"
              >
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
