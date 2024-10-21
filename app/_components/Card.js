import Image from "next/image";

function Card({ children = null }) {
  return (
    <article className="flex w-[280px] flex-col gap-[8px] overflow-hidden rounded-[12px] bg-neutral-0 p-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105 max-lg:w-[185px]">
      {children}
    </article>
  );
}

function CardImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={264}
      height={264}
      className="aspect-square rounded-[10px] object-cover"
    />
  );
}

function CardContent({ children = null }) {
  return <div className="p-[8px_8px_20px]">{children}</div>;
}

export { Card, CardImage, CardContent };
