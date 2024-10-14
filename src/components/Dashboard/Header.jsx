import { Link, useNavigate } from "react-router-dom";
import useImages from "../../hooks/useImages";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";

const Header = () => {
  const { user, logout, loggedUser } = useUser();
  const [toggle, setToggle] = useState(false);
  const { avatar } = useImages();
  const nav = useNavigate();

  useEffect(() => {
    if (loggedUser == false) {
      nav("/login");
    }
  }, [loggedUser]);

  return (
    <header className="flex sm:items-center flex-col sm:flex-row gap-2  justify-between py-3 px-2">
      <div>
        <h2 className="capitalize sm:text-2xl font-serif">
          welcome{" ,"}
          <span className="sm:p-2 rounded-full text-[#3d464d]">
            {user?.username}
          </span>
        </h2>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={avatar}
            alt="userPic"
          />
          <div className="flex items-center flex-col relative">
            <div
              className="flex items-center flex-col cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <span className="sm:font-bold capitalize"> {user?.username}</span>
              <small className="text-gray-500">{user?.email}</small>
            </div>
            <ul
              className={`absolute bg-slate-200 left-0 right-0 duration-300 p-2 flex flex-col gap-4 capitalize text-gray-500 rounded ${
                !toggle ? "-top-40" : "top-14"
              } z-10`}
            >
              <li>
                <Link to="/">profile</Link>
              </li>
              <li>
                <button onClick={() => logout()}>log out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
