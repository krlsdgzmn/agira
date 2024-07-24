import Container from "@/components/container";
import MarketplaceSection from "./_components/whole-sale-section";
import Image from "next/image";

const products = [
  {
    id: 1,
    product_name: "Sampalok",
    price: 115,
    unit: "kg",
    farm_name: "Harvest Haven Farm",
    image: "/products/sampalok.png",
  },
  {
    id: 2,
    product_name: "Corn",
    price: 250,
    unit: "kg",
    farm_name: "Kamalig Farm",
    image: "/products/corn.png",
  },
  {
    id: 3,
    product_name: "Eggplant",
    price: 120,
    unit: "kg",
    farm_name: "Conchie Farm",
    image: "/products/eggplant.png",
  },
  {
    id: 4,
    product_name: "Cabbage",
    price: 180,
    unit: "kg",
    farm_name: "ForThee Farm",
    image: "/products/cabbage.png",
  },
  {
    id: 5,
    product_name: "Mushrooms",
    price: 110,
    unit: "kg",
    farm_name: "Dinakdakan Farm",
    image: "/products/mushrooms.png",
  },
  {
    id: 6,
    product_name: "Bell Peppers",
    price: 220,
    unit: "kg",
    farm_name: "Baliwag Farm",
    image: "/products/bell-peppers.png",
  },
  {
    id: 7,
    product_name: "Cucumbers",
    price: 120,
    unit: "kg",
    farm_name: "Sinawali Farm",
    image: "/products/cucumbers.png",
  },
  {
    id: 8,
    product_name: "Tomatoes",
    price: 100,
    unit: "kg",
    farm_name: "Pinked Farm",
    image: "/products/tomatoes.png",
  },
  {
    id: 9,
    product_name: "Strawberries",
    price: 325,
    unit: "kg",
    farm_name: "Baguio Farm",
    image: "/products/strawberries.png",
  },
];

export default function MarketplacePage() {
  return (
    <Container>
      <main className="py-8">
        {/* Banners */}
        <section className="grid gap-4 xl:grid-cols-5">
          <div className="relative overflow-hidden border xl:col-span-3 xl:row-span-2 xl:h-72">
            <Image
              src="/agira-marketplace.png"
              alt="Agira Marketplace"
              className="h-full max-h-36 w-full sm:max-h-72"
              width={300}
              height={800}
              quality={100}
              unoptimized
            />

            <div className="absolute inset-0 flex max-w-[750px] items-center justify-start px-8">
              <Image
                src="/logo.svg"
                alt="Logo"
                className="h-16 w-16 sm:h-32 sm:w-32"
                width={128}
                height={128}
                quality={100}
                unoptimized
              />

              <h1 className="pl-4 text-xl font-extrabold text-white sm:pl-8 sm:text-4xl md:text-5xl">
                AGIRA MARKETPLACE
              </h1>
            </div>
          </div>

          <div className="hidden max-h-[8.5rem] overflow-hidden border xl:col-span-2 xl:block">
            <Image
              src="/agira-marketplace.png"
              alt="Agira Marketplace"
              className="w-full object-cover"
              width={300}
              height={800}
              quality={100}
              unoptimized
            />
          </div>

          <div className="hidden max-h-[8.5rem] overflow-hidden border xl:col-span-2 xl:block">
            <Image
              src="/agira-marketplace.png"
              alt="Agira Marketplace"
              className="w-full object-cover"
              width={300}
              height={800}
              quality={100}
              unoptimized
            />
          </div>
        </section>

        {/* Whole Sale Section */}
        <MarketplaceSection
          title="Whole Sale"
          description="Discover the Best Deals on Bulk Purchases"
          delayCount={4000}
          products={products}
        />

        {/* Amazing Deals Section */}
        <MarketplaceSection
          title="Amazing Deals"
          description="Unbeatable Prices on Top-Quality Products"
          delayCount={7000}
          products={products}
        />
      </main>
    </Container>
  );
}
