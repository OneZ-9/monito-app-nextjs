import BannerAdoptionHome from "./_sections/BannerAdoptionHome";
import BannerOneMoreFriendHome from "./_sections/BannerOneMoreFriendHome";
import Hero from "./_sections/Hero";
import PetsSection from "./_sections/PetsSection";
import ProductsSection from "./_sections/ProductsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PetsSection />
      <BannerOneMoreFriendHome />
      <ProductsSection />
      <BannerAdoptionHome />
    </>
  );
}
