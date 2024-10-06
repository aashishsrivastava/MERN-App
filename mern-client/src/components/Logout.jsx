import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("loged out successfully!!!");
        navigate(from, { replace: true });

      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="h-screen bg-tale-100 flex items-center justify-center ">
        <button
          onClick={handleLogout}
          className=" bg-red-700 font-bold text-4xl px-8 py-2 text-black  rounded  "
        >
          Signout
        </button>
      </div>
    </>
  );
};

export default Logout;
