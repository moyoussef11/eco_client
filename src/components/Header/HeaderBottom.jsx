import { useState } from "react";
import { Link } from "react-router-dom";
import useIcons from "../../hooks/useIcons";

const HeaderBottom = () => {
  const [toggle, setToggle] = useState(false);
  const { IoIosArrowUp, IoIosArrowDown, BiCategoryAlt } = useIcons();
  return (
    <div className="bottom bg-[#232f3e] paddingX py-2 text-white flex items-center gap-1 md:gap-5">
      <div className="flex items-center justify-between gap-1 md:gap-4 relative">
        <BiCategoryAlt />
        <p>shop categories</p>
        {toggle ? (
          <IoIosArrowUp
            className="cursor-grab"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <IoIosArrowDown
            className="cursor-grab"
            onClick={() => setToggle(!toggle)}
          />
        )}
        {toggle ? (
          <div className="absolute z-20 bg-[#131921] w-[150px] md:w-[200px] left-0 top-14 md:top-8 py-2">
            <ul className="flex flex-col items-center gap-10">
              <li>
                <Link to="/" className="capitalize">
                  home
                </Link>
              </li>
              <li>
                <Link to="/store" className="capitalize">
                  our store
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="capitalize">
                  blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="capitalize">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <ul className="flex items-center flex-wrap gap-2 text-xs md:text-sm md:gap-10">
          <li>
            <Link to="/" className="capitalize">
              home
            </Link>
          </li>
          <li>
            <Link to="/store" className="capitalize">
              our store
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="capitalize">
              blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="capitalize">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
