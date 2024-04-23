import React, { useContext, useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Model = () => {
  // Corrected typo here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext); // Include login function
  const [message, setMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login Successful");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        setMessage("provide a correct email and password");
      });
  };

  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        setMessage("Login Successful!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

            {/* error */}
            {message ? (
              <p className="text-red text-xs italic">{message}</p>
            ) : (
              ""
            )}

            {/* Login button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white"
              />
            </div>
            <p className="text-center my-2">
              Dont have an account?{" "}
              <Link to="/signup" className="text-red ml-1 underline ">
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
          <div className="text-center flex flex-row justify-center -mt-2 space-x-3">
            <button
              className="btn btn-circle hover:bg-green hover:text-white"
              onClick={handleLogin}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaInstagram />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaLinkedin />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaTwitter />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebook />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Model;
