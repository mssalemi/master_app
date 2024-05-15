import React, { useState } from "react";
import { Command } from "lucide-react";

const GUEST_USER_AVATAR_IMG_URL =
  "https://i.postimg.cc/0y8PvSdz/DALL-E-2024-04-22-21-46-47-Create-a-stylized-simplified-avatar-of-a-guest-user-suitable-for-a-sm.webp";
const strength_icon =
  "https://i.postimg.cc/7Zqp0Z72/dbdd34a9-3f1e-4e79-aa88-2d24001d39a3.webp";
const SIGN_IN_USER_AVATAR_IMG_URL =
  "https://i.postimg.cc/V6ZR561n/DALL-E-2024-04-21-08-09-33-Create-a-cartoon-version-of-the-man-s-portrait-with-a-blue-background.webp";
import { useNavigate, Link } from "@remix-run/react";

interface NavBarItems {
  title: string;
  link: string;
  submenuItems?: { title: string; link: string }[];
}

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const user = true;

  const navBarItems: NavBarItems[] = [
    { title: "Home", link: "/" },
    {
      title: "Calculator",
      link: "/calculator",
      submenuItems: [
        {
          title: "1RM Calculator",
          link: "/calculator",
        },
        {
          title: "Wilks",
          link: "/calculator",
        },
      ],
    },
    { title: "Workout Programs", link: "/workoutprograms" },
    { title: "Tracker", link: "/tracker" },
  ];

  const userListItems: NavBarItems[] = user
    ? [
        { title: "Profile", link: "/profile" },
        { title: "Settings", link: "/settings" },
        { title: "Contact Us", link: "/contact-us" },
        { title: "Logout", link: "/" },
      ]
    : [
        { title: "Login", link: "/login" },
        { title: "Sign Up", link: "/user/create" },
        { title: "Contact Us", link: "/contact-us" },
      ];

  return (
    <>
      <div className="navbar px-1">
        <div className="flex-1 flex justify-between lg:justify-start">
          <NavBarLogo />
        </div>
        <>
          <DesktopNavBarMenu navBarItems={navBarItems} />
          <MobileNavBarMenu navBarItems={navBarItems} />
        </>

        <div className="flex-1 justify-end flex">
          <NavbarItemWithDropDown listItems={userListItems}>
            <NavBarUserAvatar />
          </NavbarItemWithDropDown>
        </div>
      </div>
    </>
  );
}

const DesktopNavBarMenu = ({ navBarItems }: { navBarItems: NavBarItems[] }) => {
  return (
    <div
      className={`lg:flex hidden flex-col lg:flex-row items-center lg:space-x-2`}
    >
      {navBarItems.map((item) => {
        if (item.submenuItems) {
          return (
            <NavbarItemWithDropDown
              key={item.title}
              listItems={item.submenuItems}
            >
              <NavBarNavItem
                title={item.title}
                link={item.link}
                isDropdown={true}
              />
            </NavbarItemWithDropDown>
          );
        } else {
          return (
            <NavBarNavItem
              key={item.title}
              title={item.title}
              link={item.link}
            />
          );
        }
      })}
    </div>
  );
};

const MobileNavBarMenu = ({ navBarItems }: { navBarItems: NavBarItems[] }) => {
  return (
    <div className={`flex flex-col lg:hidden items-center space-x-2`}>
      <button className="btn btn-ghost">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </button>
    </div>
  );
};

const NavBarNavItem = ({
  title,
  link,
  isDropdown = false,
}: {
  title: string;
  link: string;
  isDropdown?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={isDropdown ? () => {} : () => navigate(link)}
      className="btn btn-ghost"
      style={{
        height: "1.5rem",
      }}
    >
      {title}
    </button>
  );
};

const NavbarItemWithDropDown = ({
  children,
  listItems,
}: {
  children: React.ReactNode;
  listItems: {
    title: string;
    link: string;
  }[];
}) => {
  return (
    <div className="dropdown dropdown-end">
      {children}
      <NavBarDropDownMenu listItems={listItems} />
    </div>
  );
};

const NavBarLogo = () => {
  const navigate = useNavigate();
  return (
    // <button onClick={() => navigate("/")} className="btn btn-ghost text-xl">
    //   StrengthTraining.ai
    // </button>

    <Link to="/" className="flex items-center space-x-2">
      <Command className="h-8 w-8" />
      <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient">
        StrengthTraining.ai
      </h1>
    </Link>
  );
};

const NavBarDropDownMenu = ({
  listItems,
}: {
  listItems: {
    title: string;
    link: string;
  }[];
}) => {
  return (
    <div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {listItems.map((item) => {
          return (
            <li key={item.title}>
              {/* Add onClick handler to close the menu when an item is clicked */}
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

const NavBarUserAvatar = ({ user }: { user?: User }) => {
  const userAvatarImgUrl = user ? SIGN_IN_USER_AVATAR_IMG_URL : strength_icon;

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
