import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import useResetPassword from "../../hooks/useResetPassword";

const ResetPassword = () => {
  const {
    submit,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    msg,
    loading,
    Link,
  } = useResetPassword();
  return (
    <>
      <BreadCrumb title={"ResetPassword"} />
      <div className="paddingX py-5 bg-slate-100">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  max-w-3xl mx-auto bg-white shadow-lg">
          <h5 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
            reset password
          </h5>
          <form onSubmit={submit} className="space-y-4 md:space-y-6">
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

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="CPassword"
                id="CPassword"
                value={passwordConfirm}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            {msg ? (
              <Link to="/login" className="">
                <span className="text-green-500 capitalize font-bold">
                  {msg?.msg}
                </span>
              </Link>
            ) : (
              ""
            )}
            <button
              type="submit"
              className={`w-full ${
                loading !== "succeeded"
                  ? "bg-black"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
