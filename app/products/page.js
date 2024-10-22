import { Card, CardContent, CardImage } from "../_components/Card";

async function Page() {
  const res = await fetch(
    "https://monitor-backend-rust.vercel.app/api/products",
  );
  const data = await res.json();
  console.log(data);
  console.log(data.length);

  return (
    <div>
      Products
      <h1>Head</h1>
      <h2>Head</h2>
      <h3>Head</h3>
      <h4 className="font-medium">Head</h4>
      <div className="flex gap-8">
        {data.map((product) => (
          <Card key={product.id}>
            <CardImage src={product.image} alt={product.name} />
            <CardContent>
              <div className="flex flex-col gap-[10px]">
                <h4>{product.name}</h4>
                <p>{product.product}</p>
                <p>{product.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
