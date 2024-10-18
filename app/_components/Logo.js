import Image from "next/image";
import logo from "@/public/images/logo-monito.png";

function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt="monito-logo"
        width="115"
        height="40"
        quality={100}
      />
    </div>
  );
}

export default Logo;
