import useIcons from "../../hooks/useIcons";
const FooterTop = () => {
  const { BsFillSendCheckFill } = useIcons();
  return (
    <div className="text-white paddingX py-4 max-w-6xl mx-auto flex flex-col sm:flex-row gap-2 justify-center items-center border-b border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center gap-3">
        <BsFillSendCheckFill size={30} />
        <p className="md:text-2xl">sign up for newsletter</p>
      </div>
      <div className="w-full sm:w-1/2">
        <form className="w-full relative flex items-center">
          <input
            className="w-full rounded py-2"
            type="text"
            placeholder="your email"
          />
          <button
            type="submit"
            className="uppercase absolute bg-[#232f3e] p-1 right-2 rounded"
          >
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterTop;
