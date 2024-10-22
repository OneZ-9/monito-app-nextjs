"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex items-center gap-[4rem] text-[2rem] transition-all duration-300 lg:text-[2.4rem]">
      <Link href="#">
        <FaXTwitter className="hover:scale-110 hover:text-primary" />
      </Link>
      <Link href="#">
        <FaFacebook className="hover:scale-110 hover:text-primary" />
      </Link>
      <Link href="#">
        <FaInstagram className="hover:scale-110 hover:text-primary" />
      </Link>
      <Link href="#">
        <FaYoutube className="hover:scale-110 hover:text-primary" />
      </Link>
    </div>
  );
}

export default SocialMedia;
