import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
  SiTelegram,
} from "react-icons/si";

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsContactAndLink {
        facebookLink1
        instagramLink
        youTubeChannelLink
        telegramLink
        whatsAppNumber
      }
    }
  `);

  return (
    <div className="my-10 md:my-24">
      <h1 className="text-2xl font-semibold text-center">
        Connect on Social Media
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 hover:text-blue-back-500 my-4 md:my-8">
        {/* Social Media */}
        <a
          href={data.graphCmsContactAndLink.facebookLink1}
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiFacebook className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord Ministries
          </h3>
        </a>
        <a
          href={data.graphCmsContactAndLink.instagramLink}
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiInstagram className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">LifeWordNation</h3>
        </a>
        <a
          href={data.graphCmsContactAndLink.youTubeChannelLink}
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiYoutube className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord Nation
          </h3>
        </a>
        <a
          href={`https://wa.me/${data.graphCmsContactAndLink.whatsAppNumber}`}
          target="__blank"
          className="flex flex-row mb-3 md:mb-4 mx-auto w-60 bg-white rounded-md shadow-sm hover:shadow-md p-3"
        >
          <SiWhatsapp className="text-3xl my-auto" />
          <h3 className="my-auto mx-2 text-md font-semibold">
            LifeWord WhatsApp
          </h3>
        </a>
        <a
          href={data.graphCmsContactAndLink.telegramLink}
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
