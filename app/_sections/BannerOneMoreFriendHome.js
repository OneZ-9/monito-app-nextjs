import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../_components/Button";
import Image from "next/image";
import Banner from "../_components/Banner";
import BannerImage1 from "@/public/images/cta-banner/banner1-image.png";

function BannerOneMoreFriendHome() {
  return (
    <div className="container mb-[100px]">
      <Banner backgroundColor="bg-primary" square2Color="bg-primary-80">
        <div className="grid h-full items-center max-xl:grid-rows-2 max-xl:justify-items-center xl:grid-cols-2">
          <Image
            src={BannerImage1}
            alt="Banner image"
            quality={100}
            className="z-10 self-end max-xl:row-start-2"
          />

          <div className="container z-10 text-center max-sm:pt-12 xl:self-center xl:text-right 2xl:px-[11.5rem]">
            <p className="mb-[0.8rem] flex flex-col text-primary">
              <strong className="mb-[0.2rem] text-[5.2rem] font-extrabold leading-[6.8rem]">
                One More Friend
              </strong>
              <span className="text-[3.6rem] font-bold">
                Thousands More Fun!
              </span>
            </p>
            <p className="text-xs font-medium text-neutral-80">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="mt-[2.4rem] flex justify-center gap-[2rem] xl:justify-end">
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
        </div>
      </Banner>
    </div>
  );
}

export default BannerOneMoreFriendHome;
