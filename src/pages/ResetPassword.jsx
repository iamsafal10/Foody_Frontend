import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    console.log("handle reset password function working fine ");
    e.preventDefault();
    try {
      const res = await axios.put(
        "https://foody-backend-hk2y.onrender.com/api/reset-password",
        {
          email,
        },
        {
          withCredentials: true,
        }
      );
      const data = await res.data;

      if (data.success) {
        toast.success(data.message);
        navigate("/verify-otp");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleResetPassword}
        className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[28vw] text-sm"
      >
        <span className="text-lg Z text-gray-600 cursor-pointer -mb-l text-center">
          Enter Your Email For Verification
        </span>
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

        <button
          type="submit"
          className="outline-none border rounded-md px-3 py-2 text-white bg-green-500 hover:bg-green-300"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
