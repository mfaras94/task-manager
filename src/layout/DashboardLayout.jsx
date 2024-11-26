import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const { handleLogOut, user } = useAuth();

  return (
    <div className="grid grid-cols-12 grid-rows-[64px,1fr] h-screen">
      <header className=" bg-white col-span-full border ">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <span className="pl-1 font-serif tracking-widest font-semibold text-gray-700"> Taskify</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Product</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a>
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-sm/6 font-semibold text-gray-900"
              onClick={() => handleLogOut()}
            >
              {" "}
              {user && "Logout"} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      <aside className="col-span-2 border-r"></aside>
      <main className=" col-span-10 overflow-auto bg-white  scrollbar-thin snap-mandatory snap-x">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
