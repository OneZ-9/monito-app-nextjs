import { IoIosArrowForward } from "react-icons/io";
import Button from "../_components/Button";
import PetCardList from "../_components/PetCardList";
import SectionTitle from "../_components/SectionTitle";

function PetsSection() {
  return (
    <section id="pets" className="container">
      <div className="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-y-[3rem] lg:grid-rows-[auto_1fr]">
        {/* <div className="mb-[2.8rem] flex items-center justify-between"> */}
        <SectionTitle
          MainHeading="Take A Look At Some of Our Pets"
          SubHeading="Whats new?"
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
        {/* </div> */}

        <div className="col-span-2">
          <PetCardList className="grid grid-cols-2 justify-items-center gap-[2rem] md:grid-cols-3 xl:grid-cols-4" />
        </div>
      </div>
    </section>
  );
}

export default PetsSection;
