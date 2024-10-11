import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import ROLE from "../Role/role";
import { toast } from "react-toastify";
import UploadImage from "../src/helper/UploadImage";

const AdminPanel = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
    duration: "",
    day: "",
    trainer: "",
    photo: [],
    trainee: "",
  });
  console.log("data", data);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const cloudinaryImage = await UploadImage(file);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, cloudinaryImage.url],
      };
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const fetchdata = await fetch(ApiList.uploadProduct.url, {
      method: ApiList.uploadProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await fetchdata.json();
    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      fetchAllProduct();
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };
  useEffect(() => {
    if (user.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="px-4 md:px-8 lg:-16 xl:px-32 2xl:px-64 mt-20  ">
      <div className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleOnSubmit} className="grid p-4 gap-2  pb-5">
          <label htmlFor="title">Class name </label>
          <input
            type="text"
            className="p-2  outline-none ring-1 ring-slate-300 rounded"
            name="title"
            value={data.title}
            onChange={handleOnchange}
            placeholder="Enter class name ..."
            id="title"
            required
          />
          <label htmlFor="trainer">Trainer name </label>
          <input
            type="text"
            className="p-2  outline-none ring-1 ring-slate-300 rounded"
            name="trainer"
            value={data.trainer}
            onChange={handleOnchange}
            placeholder="Enter trainer name ..."
            id="trainer"
            required
          />
          <label htmlFor="day">Day name </label>
          <input
            type="text"
            className="p-2  outline-none ring-1 ring-slate-300 rounded"
            name="trainer"
            value={data.day}
            onChange={handleOnchange}
            placeholder="Enter day name ..."
            id="day"
            required
          />
          <label htmlFor="time">Class duration </label>
          <input
            type="number"
            className="p-2  outline-none ring-1 ring-slate-300 rounded"
            name="trainer"
            value={data.duration}
            onChange={handleOnchange}
            placeholder="Enter class  duration ..."
            id="time"
            required
          />

          <label htmlFor="productImage">Class image</label>
          <label htmlFor="uploadImage">
            <div className=" h-20 p-2 ring-1 ring-slate-300 rounded  w-full  flex justify-center items-center cursor-pointer">
              <div className=" text-slate-500 flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Image</p>
                <input
                  onChange={handleUploadProduct}
                  type="file"
                  id="uploadImage"
                  hidden
                />
              </div>
            </div>
          </label>
          <label htmlFor="description">Description</label>
          <textarea
            row={3}
            className="p-2  outline-none ring-1 ring-slate-300 rounded"
            name="description"
            value={data.description}
            onChange={handleOnchange}
            placeholder="Enter class description ..."
            id="description"
            required
          />

          <button className="px-3 py-2 w-max text bg-red-400 my-5 ring-1 ring-slate-300 rounded">
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
