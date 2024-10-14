import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../rtk/slices/auth/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { user, loading, msg, error } = auth;

  async function submit(e) {
    e.preventDefault();
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
    await dispatch(login({ email, password }));
    window.location.reload();
  }

  useEffect(() => {
    if (error) {
      toast.error(`${error}`);
    }
    if (loading == "succeeded") {
      if (user?.role == "admin") {
        nav("/dashboard");
      } else {
        nav("/");
      }
    }
  }, [user, loading, msg, error]);

  return (
    <>
      <BreadCrumb title={"login"} />
      <div className="paddingX py-5 bg-slate-100">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  max-w-3xl mx-auto bg-white shadow-lg">
          <h5 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
            login
          </h5>
          <form onSubmit={submit} className="space-y-4 md:space-y-6">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {msg !== null && loading == "pending" ? (
                <p className="text-sm text-red-500">{msg}</p>
              ) : (
                ""
              )}
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
              />
              {error !== null && loading == "failed" ? (
                <p className="text-sm text-red-500">{error}</p>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className={`w-full ${
                loading === "pending"
                  ? "pointer-events-none bg-gray-400 cursor-not-allowed"
                  : "bg-black"
              } text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              log in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
