import { IoIosArrowForward } from "react-icons/io";
import Button from "../_components/Button";
import ProductCardList from "../_components/ProductCardList";
import SectionTitle from "../_components/SectionTitle";

function ProductsSection() {
  return (
    <section id="products" className="container">
      <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-y-[3rem] lg:grid-rows-[auto_1fr]">
        <SectionTitle
          MainHeading="Our Products"
          SubHeading="Hard to choose right products for your pets?"
          className="col-span-2"
        />

        <Button
          size="medium"
          type="outline"
          icon={<IoIosArrowForward />}
          iconRight={true}
          className="col-span-2 row-start-3 w-full justify-self-end lg:col-start-2 lg:row-start-1 lg:w-fit"
        >
          View more
        </Button>
        <div className="col-span-2">
          <ProductCardList className="grid grid-cols-2 justify-items-center gap-[2rem] md:grid-cols-3 xl:grid-cols-4" />
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
