import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import useForgotPassword from "../../hooks/useForgotPassword";

const ForgotPassword = () => {
  const { submit, email, setEmail, loading } = useForgotPassword();
  return (
    <>
      <BreadCrumb title={"Forgot Password"} />
      <div className="paddingX py-5 bg-slate-100">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  max-w-3xl mx-auto bg-white shadow-lg">
          <h5 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
            reset your password
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full"
                placeholder="name@gmail.com"
                required=""
              />
            </div>
            <button
              type="submit"
              className={`w-full ${
                loading !== "succeeded"
                  ? "bg-black"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
