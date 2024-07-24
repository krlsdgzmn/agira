"use client";

import ProductCard from "./product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function MarketplaceSection({
  title,
  description,
  delayCount,
  products,
}: {
  title: string;
  description: string;
  delayCount: number;
  products: {
    id: number;
    product_name: string;
    price: number;
    unit: string;
    farm_name: string;
    image: string;
  }[];
}) {
  return (
    <section className="pt-8">
      <h1 className="text-lg font-bold md:text-xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>

      <Carousel
        className="mx-auto w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: delayCount })]}
      >
        <CarouselContent className="gap-4 p-4">
          {products.map((item) => (
            <CarouselItem
              key={item.id}
              className="max-w-[200px] basis-1/2 overflow-hidden rounded-lg border border-border bg-card pl-0 shadow sm:basis-1/3"
            >
              <ProductCard
                name={item.product_name}
                price={item.price}
                unit={item.unit}
                farm={item.farm_name}
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
