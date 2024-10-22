import Image from "next/image";

function Card({
  children = null,
  className = "flex md:w-[220px] lg:w-[280px] flex-col gap-[8px] overflow-hidden rounded-[12px] bg-neutral-0 p-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105 w-[185px] ",
}) {
  return <article className={`${className}`}>{children}</article>;
}

function CardImage({
  src,
  alt,
  height = 264,
  width = 264,
  className = "aspect-square rounded-[10px] object-cover",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className}`}
    />
  );
}

function CardContent({ children = null, className = "p-[8px_8px_20px]" }) {
  return <div className={`${className}`}>{children}</div>;
}

export { Card, CardImage, CardContent };
