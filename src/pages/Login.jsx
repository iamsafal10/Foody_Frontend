import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser, setUser } from "../slices/AuthSlice";
import { useDispatch } from "react-redux";
import { getCart } from "../../helper";
import { setCart } from "../slices/CartSlice";
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUserLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://foody-backend-hk2y.onrender.com/api/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    const data = await res.data;
    console.log(data);
    if (res.status === 200) {
      dispatch(loginUser());

      dispatch(setUser(data.user));

      const cartData = await getCart(data.user);
      dispatch(setCart(cartData.cartItems));
      toast.success(data.message);
      navigate("/");
    } else if (res.status === 400 || res.status === 500) {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleUserLogin}
        className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm"
      >
        <input
          type="email"
          name="email"
          id="email"
          className="outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600"
          autoComplete="off"
          placeholder="johndoe@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600"
          autoComplete="off"
          placeholder="*************"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          to="/reset-password"
          className="text-xs text-gray-600 hover:underline cursor-pointer -mb-1"
        >
          Forgot Password
        </Link>

        <button
          type="submit"
          className="outline-none border rounded-md px-3 py-2 text-white bg-green-500 hover:bg-green-300"
        >
          Login
        </button>

        <p className="text-xs text-gray-600 flex gap-2 -mt-1">
          <span>OR</span>

          <Link to="/signup" className="hover:text-green-600">
            Create your account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
