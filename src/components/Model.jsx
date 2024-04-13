import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Model = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
      <div className="modal-box">
        <div className="modal-action  flex flex-col  justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body "
            method="dialog"
          >
            <h3 className=" font-extrabold text-2xl text-center justify-center gap-0 -mb-2 -mt-8  ">
              Login{" "}
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
                value="Login"
                className="btn bg-green text-white"
              />
            </div>
            <p className=" text-center my-2">
              Dont have an account?{" "}
              <Link to="/signup" className="text-red ml-1 underline ">
                {" "}
                Signup
              </Link>
            </p>

            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5 text-2xl"
            >
              X
            </button>
          </form>
          <div className=" text-center flex flex-row  justify-center -mt-2 space-x-3">
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
      </div>
    </dialog>
  );
};

export default Model;
