import React from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiLineChart, BiWallet } from "react-icons/bi";
import { MdOutlineSavings, MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineKey, HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const routes = [
    //listing out my sidebar links
    {
      route: "/",
      name: "Home",
      icon: <AiOutlineHome />,
    },

    {
      route: "/users",
      name: "Users",
      detail: "/users/[slug]",
      icon: <AiOutlineUsergroupDelete />,
    },

    {
      route: "/use",
      name: "Investments",
      icon: <BiLineChart />,
    },
    {
      route: "/use",
      name: "Savings",
      icon: <MdOutlineSavings />,
    },
    {
      route: "/use",
      name: "Wallet",
      icon: <BiWallet />,
    },
    {
      route: "/use",
      name: "Admins",
      icon: <MdOutlinePersonOutline />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-body">
        {routes.map((route) => (
          <Link href={route.route} key={route.name}>
            <div
              className={
                router.pathname === route.route ||
                route.detail === "/users/[slug]"
                  ? "active"
                  : "sidebar-link" //if route path matches mapped route path then let link take active classname
              }
            >
              <div>{route.icon}</div>
              <p>{route.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="sidebar-footer">
        <section className="column-flex">
          <p className="app__flex-3">
            <span>
              <HiOutlineKey />
            </span>{" "}
            Change Password
          </p>
          <p className="app__flex-3">
            <span>
              <HiOutlineLogout />
            </span>{" "}
            Logout
          </p>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
