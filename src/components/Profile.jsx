import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="profile">
      <div className="drawer drawer-end z-40">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-4"
            className="drawer-button  btn bg-slate-400 hover:bg-green text-white btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href="/Update-Profile">Profile </a>
            </li>
            <li>
              <a>Order </a>
            </li>
            <li>
              <a>Settings </a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string.isRequired, // Make sure photoUrl is a string and required
  }).isRequired,
};
export default Profile;
