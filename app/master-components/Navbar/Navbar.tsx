import React from "react";

const GUEST_USER_AVATAR_IMG_URL =
  "https://i.postimg.cc/0y8PvSdz/DALL-E-2024-04-22-21-46-47-Create-a-stylized-simplified-avatar-of-a-guest-user-suitable-for-a-sm.webp";
const SIGN_IN_USER_AVATAR_IMG_URL =
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

const NavBarDropDownMenu = ({ user }: { user?: User }) => {
  const listItems = !user
    ? [
        { title: "Profile", link: "/profile" },
        { title: "Settings", link: "/settings" },
        { title: "Contact Us", link: "/contact-us" },
        { title: "Logout", link: "/" },
      ]
    : [
        { title: "Login", link: "/login" },
        { title: "Sign Up", link: "/sign-up" },
        { title: "Contact Us", link: "/contact-us" },
      ];

  return (
    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {listItems.map((item) => {
        return (
          <li key={item.title}>
            <a className="justify-between" href={item.link}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

const NavBarUserAvatar = ({ user }: { user?: User }) => {
  const userAvatarImgUrl = !user
    ? SIGN_IN_USER_AVATAR_IMG_URL
    : GUEST_USER_AVATAR_IMG_URL;

  return (
    <>
      {" "}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userAvatarImgUrl} />
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
