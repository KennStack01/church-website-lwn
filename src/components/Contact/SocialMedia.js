import React from "react";
// import { graphql, useStaticQuery } from 'gatsby';
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
  SiTelegram,
} from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="md:my-24">
      <h1 className="text-xl font-semibold text-center">
        Connect on Social Media
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 my-4 md:my-8">
        {/* Social Media */}
        <a
          href="https://www.facebook.com/lifewordministriesinternational/"
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiFacebook className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord Ministries
          </h3>
        </a>
        <a
          href="https://instagram.com/lifewordgospel?utm_medium=copy_link"
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiInstagram className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">LifeWordNation</h3>
        </a>
        <a
          href="https://www.youtube.com/channel/UColw4smJYwUTsavkxVPIcFg"
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiYoutube className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord Nation
          </h3>
        </a>
        <a
          href="https://wa.me/008615810555073"
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiWhatsapp className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord WhatsApp
          </h3>
        </a>
        <a
          href="https://t.me/joinchat/LxrrXrRtAmVmMGY1"
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiTelegram className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord Telegram
          </h3>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
