import React from "react";

const LOL_MEHDI_CARTOON_IMG_URL =
  "https://i.postimg.cc/V6ZR561n/DALL-E-2024-04-21-08-09-33-Create-a-cartoon-version-of-the-man-s-portrait-with-a-blue-background.webp";

export function Navbar() {
  const navBarItems = [
    { title: "Home", link: "/" },
    { title: "Calculator", link: "/calculator" },
    { title: "Workout Programs", link: "workoutprograms" },
    { title: "Tracker", link: "tracker" },
  ];
  return (
    <>
      <div className="navbar bg-base-200 px-1">
        {/* Logo Section - Flex 1 to grow and take equal space */}
        <div className="flex-1 flex justify-start">
          {" "}
          {/* Modified: justify-end */}
          <NavBarLogo />
        </div>

        {/* Navigation Links - Middle section grows on larger screens */}
        <div className="lg:flex items-center justify-center space-x-2 hidden sm:block">
          {navBarItems.map((item) => (
            <NavBarNavItem
              key={item.title}
              title={item.title}
              link={item.link}
            />
          ))}
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

const NavBarNavItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <a
      href={link}
      className="btn btn-ghost"
      style={{
        height: "1.5rem",
      }}
    >
      {title}
    </a>
  );
};

const NavBarLogo = () => {
  return (
    <a href="/" className="btn btn-ghost text-xl">
      StrengthTraining.ai
    </a>
  );
};

const NavBarDropDownMenu = () => {
  return (
    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between" href="/profile">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a href="/settings">Settings</a>
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
            src={LOL_MEHDI_CARTOON_IMG_URL}
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
