import Image from "next/image";
import logo from "@/public/images/logo-monito.png";

function Logo({ className, width = 115, height = 40 }) {
  return (
    <div className={className}>
      <Image
        src={logo}
        alt="monito-logo"
        width={width}
        height={height}
        quality={100}
      />
    </div>
  );
}

export default Logo;
