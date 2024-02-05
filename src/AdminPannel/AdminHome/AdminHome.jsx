import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineSubscriptions } from "react-icons/md";
import SkilitonLoader from "../SkilitonLoader/SkilitonLoader";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <SkilitonLoader/>
      ) : (
        <div>
          <h1 className="py-6 text-center text-xl font-semibold">
            Welcome back <span className=" font-bold text-cyan-600"> @{user?.displayName || "Guest"}</span>
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6">
            <div className="card w-96 bg-base-100  h-56 flex-shrink-0">
              <div className="card-body bg-[#D35400] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl">
                  <HiUserGroup /> Total User
                </h2>
                <p className="text-white text-2xl">New User: 50</p>
                <div className="card-actions justify-center">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100  h-56 flex-shrink-0">
              <div className="card-body bg-[#0660F8] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl ">
                  <MdOutlineSubscriptions /> Subscription
                </h2>
                <p className="text-white text-2xl ">Total subscription: 30</p>
                <div className="card-actions justify-center">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 h-56 flex-shrink-0">
              <div className="card-body bg-[#3D8600] rounded-xl ml-5">
                <h2 className="card-title text-white text-2xl ">
                  <MdOutlineSubscriptions /> Visitors
                </h2>
                <p className="text-white text-2xl ">Total Visitor: 600k</p>
                <div className="card-actions justify-center">
                  <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
