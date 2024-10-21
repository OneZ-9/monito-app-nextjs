import { IoIosArrowForward } from "react-icons/io";
import Button from "../_components/Button";
import Image from "next/image";
import Bakers from "@/public/images/partner-logos/bakers.png";
import Butchers from "@/public/images/partner-logos/butchers.png";
import Felix from "@/public/images/partner-logos/felix.png";
import GoodBoy from "@/public/images/partner-logos/good-boy.png";
import Pedigree from "@/public/images/partner-logos/pedigree.png";
import Sheba from "@/public/images/partner-logos/sheba.png";
import Whiskas from "@/public/images/partner-logos/whiskas.png";
import SectionTitle from "../_components/SectionTitle";

function PartnersSection() {
  return (
    <section id="partners" className="container max-lg:hidden">
      <div className="mb-[2.8rem] flex items-center justify-between">
        <SectionTitle
          MainHeading="Pet Sellers"
          SubHeading="Proud to be part of"
          HeadingFlexRow={true}
        />

        <Button
          size="medium"
          type="outline"
          icon={<IoIosArrowForward />}
          iconRight={true}
        >
          View all our sellers
        </Button>
      </div>

      <div className="flex w-full items-center gap-[2rem]">
        <Image
          src={Sheba}
          alt="Sheba logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] px-[1.6rem]"
        />
        <Image
          src={Whiskas}
          alt="Whiskas logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] p-[1rem]"
        />
        <Image
          src={Bakers}
          alt="Bakers logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] p-[1rem]"
        />
        <Image
          src={Felix}
          alt="Felix logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] p-[1rem]"
        />
        <Image
          src={GoodBoy}
          alt="GoodBoy logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] p-[1rem]"
        />
        <Image
          src={Butchers}
          alt="Butchers logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] p-[1rem]"
        />
        <Image
          src={Pedigree}
          alt="Pedigree logo"
          quality={100}
          className="h-[11.2rem] w-[15.1rem] p-[1rem]"
        />
      </div>
    </section>
  );
}

export default PartnersSection;
