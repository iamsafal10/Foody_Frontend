import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/api/verify-otp", {
        otp,
        newPassword: password,
      });
      const data = await res.data;
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleVerifyOtp}
        className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm"
      >
        <input
          type="text"
          name="otp"
          autoComplete="on"
          id="otp"
          className="outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600"
          placeholder="Enter OTP Here"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <input
          type="password"
          name="password"
          autoComplete="on"
          id="password"
          className="outline-none border rounded-md px-3 py-2 focus:border-green-300 text-gray-600"
          placeholder="Enter Password Here"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="outline-none border rounded-md px-3 py-2 text-white bg-green-500 hover:bg-green-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
