import React from "react";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Homepage</a>
              </li>

              <li>
                <a href="/completeGames">Complete Games</a>
              </li>
              <li>
                <a href="/ledger">My Ledger</a>
              </li>
              <li>
                <a href="/statement">My Statement</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="tooltip tooltip-bottom " data-tip="20xBet">
            <a href="/" className="btn text-3xl">
              20xBet
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="tooltip tooltip-left" data-tip="Go to Home">
            <a href="/">
              <div className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <details>
                  <summary>Settings</summary>
                  <ul>
                    <li>
                      <a href="/changePassword">Change Password</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
