import { LuDot } from "react-icons/lu";
import { Card, CardContent, CardImage } from "./Card";
import { BsGiftFill } from "react-icons/bs";

async function ProductCardList({ className }) {
  const res = await fetch(
    "https://monitor-backend-rust.vercel.app/api/products",
  );
  const products = await res.json();

  return (
    <div className={className}>
      {products.map((product) => (
        <Card key={product.id}>
          <CardImage src={product.image} alt={product.name} />
          <CardContent>
            <p className="mb-[0.4rem] text-sm font-bold text-neutral-100 lg:text-base">
              {product.name}
            </p>

            <div className="mb-[0.4rem] flex items-center gap-x-[0.4rem] text-xs text-neutral-60">
              <small className="font-medium">
                Product: <span className="font-bold">{product.product}</span>
              </small>
              <LuDot />
              <small className="font-medium">
                Size: <span className="font-bold">{product.size}</span>
              </small>
            </div>

            <p className="text-base font-bold text-neutral-100 lg:text-sm">
              {product.price}
            </p>

            <div className="] mt-[1rem] flex w-full items-center gap-[0.2rem] rounded-[0.8rem] bg-secondary-40 p-[0.6rem_1rem] text-sm font-bold text-primary-80 max-lg:text-2xs">
              <BsGiftFill className="h-[2rem] w-[2rem] fill-state-pinkRed" />
              <LuDot />
              <p>{product.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProductCardList;
