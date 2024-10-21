import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="container fixed top-0 z-50 flex h-[57px] max-w-full items-center justify-between gap-[3.6rem] bg-inherit py-[2.8rem] xl:h-[100px]">
      <MobileNavigation />
      <div className="flex items-center xl:gap-x-[48px]">
        <Logo />
        <Navigation className="flex items-center justify-center gap-x-[4.8rem] font-bold text-primary max-xl:hidden" />
      </div>

      <HeaderActions />
    </header>
  );
}

export default Header;
