import Image from "next/image";
import BannerImage2 from "@/public/images/cta-banner/banner2-image.png";
import Button from "../_components/Button";
import { FaPaw, FaRegCirclePlay } from "react-icons/fa6";
import Banner from "../_components/Banner";

function BannerAdoptionHome() {
  return (
    <div className="container mb-[100px]">
      <Banner
        backgroundColor="bg-secondary-100"
        scaleX={-1}
        square2Color="bg-gradient-to-b from-[#FBEED4] via-[#FBEED4] to-[#FFE6B9]"
        square2Opacity={0.3}
      >
        <div className="grid h-full items-center max-xl:grid-rows-2 max-xl:justify-items-center xl:grid-cols-2">
          <div className="container z-10 text-center max-sm:pt-12 xl:self-center xl:text-right 2xl:px-[11.5rem]">
            <p className="mb-[0.8rem] flex flex-col text-primary max-xl:text-center">
              <strong className="mb-[0.2rem] flex items-center gap-[1.6rem] text-[5.2rem] font-extrabold leading-[6.8rem] max-xl:justify-center">
                Adoption
                <span>
                  <FaPaw className="h-[3.8rem] w-[4.2rem]" />
                </span>
              </strong>

              <span className="text-[3.6rem] font-bold">
                We Need Help. So Do They.
              </span>
            </p>
            <p className="text-xs font-medium text-neutral-80">
              <span className="inline-block w-full">
                Adopt a pet and give it a home,
              </span>
              it will be love you back unconditionally.
            </p>
            <div className="mt-[4.2rem] flex flex-row-reverse justify-center gap-[2rem] xl:justify-end">
              <Button
                type="outline"
                iconRight={true}
                size="large"
                icon={<FaRegCirclePlay />}
              >
                View Intro
              </Button>
              <Button size="large">Explore Now</Button>
            </div>
          </div>

          <Image
            src={BannerImage2}
            alt="Banner image"
            quality={100}
            className="z-10 -rotate-[75deg] self-stretch max-xl:row-start-2 xl:self-end"
          />
        </div>
      </Banner>
    </div>
  );
}

export default BannerAdoptionHome;
