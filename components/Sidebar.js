import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiLineChart, BiWallet } from "react-icons/bi";
import { MdOutlineSavings, MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineKey, HiOutlineLogout } from "react-icons/hi";

import { useAppProvider } from "../context/AppProvider";

const Sidebar = () => {
  const router = useRouter();
  const {slugParam} = useAppProvider();
  // console.log('slugparam', slugParam);

  const routes = [  //listing out my sidebar links
    {
      //   path: `/${firstName}/dashboard`,
      route: "/",
      name: "Home",
      icon: <AiOutlineHome />,
    },

    {
      //   path: `/${firstName}/library`,
      route: '/users',
      slug: slugParam,
      name: "Users",
      icon: <AiOutlineUsergroupDelete />,
    },

    {
      //   path: `/${firstName}/activities`,
      route: "/use",
      slug: "",
      name: "Investments",
      icon: <BiLineChart />,
    },
    {
      //   path: `/${firstName}/messages`,
      route: "/use",
      slug: "",
      name: "Savings",
      icon: <MdOutlineSavings />,
    },
    {
      //   path: `/${firstName}/messages`,
      route: "/use",
      slug: "",
      name: "Wallet",
      icon: <BiWallet />,
    },
    {
      //   path: `/${firstName}/messages`,
      route: "/use",
      slug: "",
      name: "Admins",
      icon: <MdOutlinePersonOutline />,
    },
  ];

  // console.log('pathname', router.pathname);
  // console.log('rouetr slug', routes.name);
  // console.log('Routes', routes.name);


  return (
    <div className="sidebar">
      <div className="sidebar-body">
        {routes.map((route) => (
          <Link href={route.route} key={route.name}>
            <div
              className={
                router.pathname  === route.route ? "active" 
                :router.pathname === route.slug ? "active"
                : "sidebar-link"  //if route path matches mapped route path then let link take active classname
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
            <p className="app__flex-3"><span><HiOutlineKey /></span> Change Password</p>
            <p className="app__flex-3"><span><HiOutlineLogout /></span> Logout</p>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
