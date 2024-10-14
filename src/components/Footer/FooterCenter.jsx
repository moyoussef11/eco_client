import { Link } from "react-router-dom";
const FooterCenter = () => {
  return (
    <div className="w-full paddingX mx-auto grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
        <ul className="font-medium text-gray-400">
          <li className="mb-4">
            <Link to="/" className=" hover:underline">
              About
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Careers
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Brand Center
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
        <ul className="text-gray-400 font-medium">
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Discord Server
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Twitter
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Facebook
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
        <ul className="text-gray-400 font-medium">
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Licensing
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase">Download</h2>
        <ul className="text-gray-400 font-medium">
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              iOS
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Android
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              Windows
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/" className="hover:underline">
              MacOS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterCenter