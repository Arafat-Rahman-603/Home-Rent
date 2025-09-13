import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";

export default function Navber() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <nav className="w-full justify-between h-18 flex px-5 bg-blue-300 items-center">
        <Link to="/" className="h-full w-max">
          <img src="logo.png" alt="Rent App Logo" className="h-full w-max" />
        </Link>
        {menu ? (
          <button onClick={handleMenu} className="h-full w-max sm:hidden block">
            <lord-icon
              src="https://cdn.lordicon.com/umnbegnd.json"
              trigger="hover"
              colors="primary:#121331,secondary:#66a1ee"
            ></lord-icon>
          </button>
        ) : (
          <button onClick={handleMenu} className="h-full w-max sm:hidden block">
            <lord-icon
              src="https://cdn.lordicon.com/jectmwqf.json"
              trigger="hover"
              colors="primary:#121331,secondary:#66a1ee"
              className=""
            ></lord-icon>
          </button>
        )}
        <div className="h-max w-max sm:block hidden">
          <ul className="h-full w-max flex items-center gap-3">
            <li>
              <Link
                to="/"
                className={`rounded-2xl border-2 ${
                  isActive("/")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } hover:scale-90 cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rent"
                className={`rounded-2xl border-2 ${
                  isActive("/rent")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } hover:scale-90 cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all`}
              >
                Create-Add
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className={`rounded-2xl border-2 ${
                  isActive("/properties")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all hover:shadow-2xl hover:scale-90`}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/agents"
                className={`rounded-2xl border-2 ${
                  isActive("/agents")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all hover:shadow-2xl hover:scale-90`}
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`rounded-2xl border-2 ${
                  isActive("/contact")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all hover:shadow-2xl hover:scale-90`}
              >
                Help
              </Link>
            </li>

            {/* Authentication Section */}
            <SignedOut>
              <li>
                <Link
                  to="/login"
                  className="rounded-2xl border-2 border-white text-white hover:scale-90 cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all"
                >
                  Login
                </Link>
              </li>
            </SignedOut>

            <SignedIn>
              <li>
                <Link
                  to="/dashboard"
                  className={`rounded-2xl border-2 ${
                    isActive("/dashboard")
                      ? "bg-white text-blue-300 border-blue-300"
                      : "border-white text-white"
                  } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all`}
                >
                  Dashboard
                </Link>
              </li>
              <li className="h-full w-max border-2 border-transparent hover:scale-90 cursor-pointer hover:border-black rounded-full transition-all hover:bg-white">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12",
                      userButtonPopoverCard:
                        "shadow-2xl border border-gray-200",
                      userButtonPopoverActionButton: "hover:bg-blue-50",
                      userButtonPopoverActionButtonText: "text-gray-700",
                      userButtonPopoverFooter: "hidden",
                    },
                  }}
                />
              </li>
            </SignedIn>
          </ul>
        </div>
      </nav>

      {menu && (
        <div className="h-max w-full bg-blue-300 flex justify-center sm:hidden transition-all">
          <ul className="h-full w-max flex items-center justify-center border-t-2 border-white pt-3 pb-2 flex-wrap gap-3 border-b-2">
            <li>
              <Link
                to="/"
                className={`rounded-2xl border-2 ${
                  isActive("/")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } hover:scale-90 cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all`}
                onClick={() => setMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rent"
                className={`rounded-2xl border-2 ${
                  isActive("/rent")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } hover:scale-90 cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all`}
                onClick={() => setMenu(false)}
              >
                Create-Add
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className={`rounded-2xl border-2 ${
                  isActive("/properties")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all hover:shadow-2xl hover:scale-90`}
                onClick={() => setMenu(false)}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/agents"
                className={`rounded-2xl border-2 ${
                  isActive("/agents")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all hover:shadow-2xl hover:scale-90`}
                onClick={() => setMenu(false)}
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`rounded-2xl border-2 ${
                  isActive("/contact")
                    ? "bg-white text-blue-300 border-blue-300"
                    : "border-white text-white"
                } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all hover:shadow-2xl hover:scale-90`}
                onClick={() => setMenu(false)}
              >
                Help
              </Link>
            </li>

            {/* Mobile Authentication Section */}
            <SignedOut>
              <li>
                <Link
                  to="/login"
                  className="rounded-2xl border-2 border-white text-white hover:scale-90 cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all"
                  onClick={() => setMenu(false)}
                >
                  Login
                </Link>
              </li>
            </SignedOut>

            <SignedIn>
              <li>
                <Link
                  to="/dashboard"
                  className={`rounded-2xl border-2 ${
                    isActive("/dashboard")
                      ? "bg-white text-blue-300 border-blue-300"
                      : "border-white text-white"
                  } cursor-pointer font-semibold px-3 py-1 hover:text-black hover:border-black transition-all`}
                  onClick={() => setMenu(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li className="h-full w-max border-2 border-transparent hover:scale-90 cursor-pointer hover:border-black rounded-full transition-all hover:bg-white">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12",
                      userButtonPopoverCard:
                        "shadow-2xl border border-gray-200",
                      userButtonPopoverActionButton: "hover:bg-blue-50",
                      userButtonPopoverActionButtonText: "text-gray-700",
                      userButtonPopoverFooter: "hidden",
                    },
                  }}
                />
              </li>
            </SignedIn>
          </ul>
        </div>
      )}
    </>
  );
}
