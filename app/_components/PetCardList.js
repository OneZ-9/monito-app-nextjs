import { Card, CardContent, CardImage } from "./Card";
import { LuDot } from "react-icons/lu";

async function PetCardList({ className }) {
  const res = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
  const pets = await res.json();

  return (
    <div className={className}>
      {pets.map((pet) => (
        <Card key={pet.id}>
          <CardImage src={pet.image} alt={pet.breed} />
          <CardContent>
            <p className="mb-[0.4rem] text-sm font-bold text-neutral-100 lg:text-base">
              {pet.id} - {pet.breed}
            </p>

            <div className="mb-[0.4rem] flex items-center gap-x-[0.4rem] text-xs text-neutral-60">
              <small className="font-medium">
                Gene: <span className="font-bold">{pet.gender}</span>
              </small>
              <LuDot />
              <small className="font-medium">
                Age: <span className="font-bold">{pet.age}</span>
              </small>
            </div>

            <p className="text-base font-bold text-neutral-100 lg:text-sm">
              {pet.price}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PetCardList;
