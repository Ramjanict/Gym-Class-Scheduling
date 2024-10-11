import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ApiList from "../../../backendUrl/backendUrl";
import { toast } from "react-toastify";
import { setUserDetails } from "../../store/userSlice";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    const responseData = await fetch(ApiList.logout.url, {
      credentials: "include",
    });
    const data = await responseData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(""));
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex items-center gap-4 lg:gap-6 relative">
      <span
        onClick={() => {
          setIsProfileOpen((prev) => !prev);
        }}
        className="text-2xl cursor-pointer "
      >
        <IoPersonCircle />
      </span>
      {isProfileOpen && (
        <div className=" absolute top-12 left-0 p-4  rounded-md shadow-[0_3px_10px_rgb(0,0,0,.2)] z-20 bg-white flex flex-col ">
          <Link
            to="/profile"
            onClick={() => {
              setIsProfileOpen(false);
            }}
          >
            Profile
          </Link>
          {user._id ? (
            <button
              onClick={() => {
                handleLogout();
                setIsProfileOpen(false);
              }}
              className="mt-2 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="mt-2 cursor-pointer">
              Login
            </Link>
          )}
        </div>
      )}

      <div className=" cursor-pointer">
        <span className="text-2xl">
          <FiSun />
        </span>
      </div>
    </div>
  );
};

export default NavIcons;
