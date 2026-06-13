import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
import toast from "react-hot-toast";
const NavList = ({ toggleNav, setToggleNav, auth }) => {
  const LogOut = async () => {
    const res = await axios.get(
      "https://foody-backend-hk2y.onrender.com/api/logout",
      {
        withCredentials: true,
      }
    );
    const data = await res.data;
    toast.success(data.message);
    setToggleNav(!toggleNav);
    window.location.href = "/";
  };
  return (
    <div
      className={`${
        !toggleNav && "translate-x-50"
      } fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transition-all duration-500 ease-in-out`}
    >
      {auth ? (
        <li onClick={LogOut} className="hover:text-black select-none list-none">
          Logout
        </li>
      ) : (
        <div className="flex flex-col">
          <Link to="/login" className="hover:text-black select-none">
            Login
          </Link>

          <Link to="/signup" className="hover:text-black select-none">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavList;
