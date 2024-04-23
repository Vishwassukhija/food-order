import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("Sign in Successfully");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
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
              placeholder="password at least 6 digit"
              className="input input-bordered"
              required
              {...register("password")}
              // Add onChange handler
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
      <Modal />
    </div>
  );
};

export default Signup;
