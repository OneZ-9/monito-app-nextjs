import Image from "next/image";

function Card({ children = null }) {
  return (
    <article className="bg-neutral-0 overflow-hidden shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] flex flex-col gap-[8px] rounded-[12px] p-[8px] w-[280px] transition-transform duration-300 hover:scale-105">
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
      className="aspect-square object-cover rounded-[10px]"
    />
  );
}

function CardContent({ children = null }) {
  return <section className="p-[8px_8px_20px]">{children}</section>;
}

export { Card, CardImage, CardContent };
