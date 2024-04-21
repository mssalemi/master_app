import React from "react";

export function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 px-2 sm:px-4">
        {/* Logo Section - Flex 1 to grow and take equal space */}
        <div className="flex-1 flex justify-start">
          {" "}
          {/* Modified: justify-end */}
          <NavBarLogo />
        </div>

        {/* Navigation Links - Middle section grows on larger screens */}
        <div className="lg:flex items-center justify-center space-x-2 hidden sm:block">
          <NavBarNavItem title="Dashboard" />
          <NavBarNavItem title="Calculator" />
          <NavBarNavItem title="Workout Programs" />
          <NavBarNavItem title="Tracker" />
        </div>

        {/* User Avatar Section - Flex 1 to grow and take equal space */}
        <div className="flex-1 justify-end flex">
          <NavbarItemWithDropDown>
            <NavBarUserAvatar />
          </NavbarItemWithDropDown>
        </div>
      </div>
    </>
  );
}

const NavBarNavItem = ({ title }: { title: string }) => {
  return (
    <a
      href="/"
      className="btn btn-ghost"
      style={{
        height: "1.5rem",
        minHeight: "1.5rem",
        padding: "0.3rem",
      }}
    >
      {title}
    </a>
  );
};

const NavBarLogo = () => {
  return (
    <a href="/" className="btn btn-ghost text-xl">
      OneRepMax
    </a>
  );
};

const NavBarDropDownMenu = () => {
  return (
    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between" href="/">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a href="/">Settings</a>
      </li>
      <li>
        <a href="/">Logout</a>
      </li>
    </ul>
  );
};

const NavBarUserAvatar = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

const NavbarItemWithDropDown = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="dropdown dropdown-end">
      {children}
      <NavBarDropDownMenu />
    </div>
  );
};
