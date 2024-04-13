import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Model from "./Model";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className=" max-w-md bg-slate-700  shadow w-full mx-auto flex items-center justify-center  my-28 ">
      <div className="modal-action  flex flex-col  justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body "
          method="dialog"
        >
          <h3 className=" font-extrabold text-2xl text-center items-center justify-between -mb-4">
            Create an account
          </h3>

          {/* email */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            <label className="label">
              <a href="#" className="label mt-1">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login button */}
          <div className="form-control mt-6">
            <input
              type="Submit"
              value="Create an account"
              className="btn bg-green text-white"
            />
          </div>
          <p className=" text-center my-2">
            Have an account?{" "}
            <button
              className="text-red ml-1 underline "
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              {" "}
              Login
            </button>
          </p>

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5 text-2xl"
          >
            X
          </Link>
        </form>
        <div className=" text-center flex flex-row  justify-center mt-2 space-x-3 mb-4  ">
          <button className="btn btn-circle   hover:bg-green hover: text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover: text-white">
            <FaInstagram />
          </button>
          <button className="btn btn-circle hover:bg-green hover: text-white">
            <FaLinkedin />
          </button>
          <button className="btn btn-circle hover:bg-green hover: text-white">
            <FaTwitter />
          </button>
          <button className="btn btn-circle hover:bg-green hover: text-white">
            <FaFacebook />
          </button>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default Signup;
