import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import useIcons from "../hooks/useIcons";
import useContact from "../hooks/useContact";

const Contact = () => {
  const { FaHome, CiPhone, CiMail, CiLinkedin } = useIcons();
  const {
    submit,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    loading,
  } = useContact();
  return (
    <>
      <BreadCrumb title={"contact us"} />
      <div className="paddingX py-5 bg-slate-100 flex flex-col gap-5">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14762215.508647595!2d10.238977611645092!3d25.40291858618158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1726661407861!5m2!1sen!2seg"
            width="100%"
            height="650"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact bg-white shadow-lg flex flex-col gap-4 sm:flex-row">
          <div className="w-full sm:w-1/2 p-4">
            <h3 className="capitalize font-bold mb-4">contact</h3>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="mohamed youssef"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="mohamed@gmail.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                  placeholder="Let us know how we can help you"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  d
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                  placeholder="Leave a comment..."
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`py-3 px-5 ${
                  loading == "succeeded"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black"
                } capitalize text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800`}
              >
                Send message
              </button>
            </form>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <h3 className="capitalize font-bold mb-4">get in touch with us</h3>
            <nav>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <FaHome size={20} />
                  <span>13 street giza fesail</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiPhone size={20} />
                  <span>01146646254</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiMail size={20} />
                  <span>mohamed@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <CiLinkedin size={20} />
                  <a href="https://www.linkedin.com/feed/" target="_blank">
                    linkenin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
