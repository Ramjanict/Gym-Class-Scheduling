import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import ApiList from "../backendUrl/backendUrl";
import { setUserDetails } from "./store/userSlice";
import ContextApi from "./contexApi/Context";
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  //user detals
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(ApiList.current_user.url, {
      method: ApiList.current_user.method,
      credentials: "include",
    });
    const current_user = await dataResponse.json();
    if (current_user.success) {
      dispatch(setUserDetails(current_user.data));
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div>
      <ContextApi.Provider value={{ fetchUserDetails }}>
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Footer />
      </ContextApi.Provider>
    </div>
  );
};

export default App;
