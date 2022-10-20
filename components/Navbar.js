import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiRefresh } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import Logo from "../public/Logo.svg";
import Ellipse from "../public/Ellipse.svg";
import user from "../public/user.svg";

const Navbar = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div className="app__flex-2 nav__container">
      <div className="app__flex-3">
        <Image src={Logo} alt="Picture of the author" width={222} height={38} />
        <h1>{slug ? "UserProfile" : "user"}</h1>
      </div>
      <div className="app__flex">
        <BiRefresh />
        <section className="user-notes">
          <IoMdNotificationsOutline />
          <div className="app__flex">
            <Image src={Ellipse} alt="Ellipse" width={14} />
          </div>
        </section>
        <section className="column-flex">
          <h6>Ole gunnar</h6>
          <p>Super admin</p>
        </section>
        <Image src={user} alt="img" width={45} height={45} />
      </div>
    </div>
  );
};

export default Navbar;
