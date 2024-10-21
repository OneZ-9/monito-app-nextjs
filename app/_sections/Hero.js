import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../_components/Button";
import Image from "next/image";
import heroImg from "/public/images/hero-image.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative grid h-dvh w-full overflow-hidden rounded-b-[40px] bg-[linear-gradient(102.87deg,_#FCEED5_6.43%,_#FCEED5_78.33%,_#FFE7BA_104.24%)] max-xl:grid-rows-[1.2fr_0.8fr] xl:grid-cols-[0.8fr_1.2fr]"
    >
      {/* Rotated Circles */}
      <div className="absolute left-[40%] top-[200px] h-[300px] w-[300px] rotate-[10deg] rounded-[99px] bg-[#003459] sm:left-[50%] sm:h-[450px] sm:w-[450px] lg:left-[725px] lg:top-[335px] lg:h-[635px] lg:w-[635px]" />
      <div className="absolute left-[45%] top-[180px] h-[300px] w-[300px] rotate-[25deg] rounded-[99px] bg-[#F7DBA7] sm:left-[60%] sm:top-[220px] sm:h-[450px] sm:w-[450px] lg:left-[778px] lg:top-[305px] lg:h-[635px] lg:w-[635px]" />
      <div className="absolute left-[10%] top-[300px] h-[300px] w-[300px] rotate-[56deg] rounded-[99px] bg-[#F7DBA7] opacity-40 sm:left-[15%] sm:top-[450px] sm:h-[450px] sm:w-[450px] lg:left-[32px] lg:top-[687px] lg:h-[635px] lg:w-[635px]" />
      <div className="absolute left-[-40%] top-[-200px] h-[300px] w-[300px] rotate-[25deg] rounded-[99px] bg-[#F7DBA7] sm:left-[-30%] sm:top-[-300px] sm:h-[450px] sm:w-[450px] lg:left-[-230px] lg:top-[-592px] lg:h-[635px] lg:w-[635px]" />
      {/* Smaller rotated elements */}
      <div className="absolute left-[15%] top-[50px] h-[40px] w-[40px] rotate-[25deg] rounded-[10px] bg-[#F7DBA7] sm:left-[20%] sm:h-[60px] sm:w-[60px] sm:rounded-[15px] lg:left-[123px] lg:top-[210px] lg:h-[67px] lg:w-[67px] lg:rounded-[20px]" />
      <div className="absolute left-[50%] top-[100px] h-[10px] w-[10px] rotate-[21deg] rounded-[2px] bg-[#F7DBA7] sm:left-[55%] sm:h-[15px] sm:w-[15px] sm:rounded-[3px] lg:left-[759px] lg:top-[150px] lg:rounded-[4px]" />
      <div className="absolute left-[45%] top-[130px] h-[15px] w-[15px] rotate-[337deg] rounded-[5px] bg-[#F7DBA7] sm:left-[52%] sm:h-[20px] sm:w-[20px] sm:rounded-[7px] lg:left-[732px] lg:top-[204px] lg:h-[27px] lg:w-[27px] lg:rounded-[9px]" />
      <div className="absolute left-[45%] top-[140px] h-[10px] w-[10px] rotate-[317deg] rounded-[6px] bg-[#002A48] sm:left-[52%] sm:h-[15px] sm:w-[15px] sm:rounded-[4px] lg:left-[731px] lg:top-[213px] lg:h-[21px] lg:w-[21px] lg:rounded-[6px]" />

      <div className="container z-40 self-center xl:pr-0">
        <h1 className="mb-[2.4rem] flex flex-col text-primary-80">
          <strong className="font-extrabold xl:mb-[0.4rem] xl:text-[6rem] xl:leading-[6.8rem]">
            One More Friend
          </strong>
          <span className="font-bold max-xl:text-[2.8rem] max-xl:leading-[3.8rem]">
            Thousands More Fun!
          </span>
        </h1>
        <p className="font-medium text-neutral-80 max-xl:text-[1.2rem] max-xl:leading-[1.8rem]">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="mt-[3.4rem] flex gap-8">
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
        src={heroImg}
        alt="hero-image"
        quality={100}
        className="z-40 self-end"
      />
    </section>
  );
}

export default Hero;
