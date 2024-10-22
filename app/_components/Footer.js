import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";
import RegisterNow from "./RegisterNow";

function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] bg-[linear-gradient(102.87deg,_#FCEED5_6.43%,_#FCEED5_78.33%,_#FFE7BA_104.24%)] lg:rounded-t-[4rem]">
      <div className="container">
        <div className="flex flex-col gap-[4rem] border-b-[0.1rem] border-neutral-20 pb-[4rem] pt-[4rem] lg:pt-[8rem]">
          <RegisterNow />

          <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-[2rem]">
            <Navigation className="flex items-center justify-center gap-x-[4rem] text-base font-medium text-neutral-100 lg:gap-x-[6rem]" />
            <SocialMedia />
          </div>
        </div>

        <div className="grid py-[4rem] text-sm font-medium text-neutral-60 max-lg:justify-items-center lg:grid-cols-3 lg:items-center">
          <p className="max-lg:row-start-3 max-lg:text-2xs">
            &copy; 2024 Monito. All rights reserved.
          </p>
          <Logo className="justify-self-center max-lg:mb-[3.2rem]" />
          <div className="smax-lg:text-xs flex gap-[1.2rem] font-medium max-lg:mb-[0.8rem] lg:gap-[6rem] lg:justify-self-end">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
