"use client";

import ProductCard from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const products = [
  {
    id: 1,
    name: "Sampalok",
    price: 115,
    unit: "kg",
    farm: "Harvest Haven Farm",
    image: "/products/sampalok.png",
  },
  {
    id: 2,
    name: "Corn",
    price: 250,
    unit: "kg",
    farm: "Kamalig Farm",
    image: "/products/corn.png",
  },
  {
    id: 3,
    name: "Eggplant",
    price: 120,
    unit: "kg",
    farm: "Conchie Farm",
    image: "/products/eggplant.png",
  },
  {
    id: 4,
    name: "Cabbage",
    price: 180,
    unit: "kg",
    farm: "ForThee Farm",
    image: "/products/cabbage.png",
  },
  {
    id: 5,
    name: "Mushrooms",
    price: 110,
    unit: "kg",
    farm: "Dinakdakan Farm",
    image: "/products/mushrooms.png",
  },
  {
    id: 6,
    name: "Bell Peppers",
    price: 220,
    unit: "kg",
    farm: "Baliwag Farm",
    image: "/products/bell-peppers.png",
  },
  {
    id: 7,
    name: "Cucumbers",
    price: 120,
    unit: "kg",
    farm: "Sinawali Farm",
    image: "/products/cucumbers.png",
  },
  {
    id: 8,
    name: "Tomatoes",
    price: 100,
    unit: "kg",
    farm: "Pinked Farm",
    image: "/products/tomatoes.png",
  },
  {
    id: 9,
    name: "Strawberries",
    price: 325,
    unit: "kg",
    farm: "Baguio Farm",
    image: "/products/strawberries.png",
  },
];

export default function WholeSaleSection() {
  return (
    <section className="py-8">
      <h1 className="text-lg font-bold md:text-2xl">Whole Sale</h1>
      <p className="text-muted-foreground">
        Discover the Best Deals on Bulk Purchases
      </p>

      <Carousel
        className="mx-auto w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent className="gap-4 p-4">
          {products.map((item) => (
            <CarouselItem
              key={item.id}
              className="max-w-[200px] basis-1/2 overflow-hidden rounded-lg border border-border bg-card pl-0 shadow sm:basis-1/3"
            >
              <ProductCard
                name={item.name}
                price={item.price}
                unit={item.unit}
                farm={item.farm}
                image={item.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-1rem] top-1/2 z-10 -translate-y-1/2 transform" />
        <CarouselNext className="absolute right-[-1rem] top-1/2 z-10 -translate-y-1/2 transform" />
      </Carousel>
    </section>
  );
}
