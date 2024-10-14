
import useVerificationEmail from "../../hooks/useVerificationEmail";
import useIcons from "../../hooks/useIcons";

const VerificationEmail = () => {
  const { loading, Link } = useVerificationEmail();
  const { FaAnglesRight } = useIcons();

  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center">
      {loading ? (
        <div className="bg-white max-w-96 flex flex-col gap-2 items-center rounded">
          <FaAnglesRight className="my-4 text-green-500" size={30} />
          <div className="p-2 flex flex-col items-center gap-5">
            <h3 className="md:text-3xl text-center">
              Thank you for your registration
            </h3>
            <p className="text-sm">
              Hello , Thank you for confirming your email! We are excited to
              have you as part of I_BOX. Verifying your email helps us provide a
              more secure and efficient experience. If you have any questions or
              need assistance, feel free to reach out to us. <br />
              I_BOX Thanks again,
              <br /> The I_BOX Team <br /> I_BOX
            </p>
            <Link
              to="/login"
              className="w-full bg-black text-white rounded p-2 capitalize text-center"
            >
              go log in{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white max-w-96 flex flex-col gap-2 items-center rounded">
          <h3 className="md:text-3xl text-center capitalize">not found</h3>
        </div>
      )}
    </div>
  );
};

export default VerificationEmail;
