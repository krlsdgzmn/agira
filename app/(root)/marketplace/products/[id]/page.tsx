import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

type Products = {
  id: string;
  product_name: string;
  price: number;
  unit: string;
  farm_name: string;
  image: string;
};

const filterData = (id: string): Products | undefined => {
  return products.find((item) => item.id === id);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = filterData(params.id);

  if (!product) {
    return (
      <Container className="flex min-h-[85vh] flex-col items-center justify-center">
        <main className="flex max-w-56 flex-col gap-2.5">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="text-sm text-muted-foreground">
            We&apos;re sorry, but the product you&apos;re looking for does not
            exist.
          </p>
          <Link href="/marketplace">
            <Button size="sm" className="w-full bg-farm hover:bg-farm/90">
              Go Back
            </Button>
          </Link>
        </main>
      </Container>
    );
  }

  return (
    <Container className="flex min-h-[85vh] items-center justify-center py-8">
      <main className="flex h-full w-full flex-col gap-4 sm:flex-row">
        <div className="flex h-full max-h-[250px] items-center justify-center overflow-hidden rounded-lg sm:max-h-[500px] sm:w-1/2">
          <Image
            src={product.image}
            alt={product.product_name}
            className="h-full w-full object-contain"
            width={500}
            height={500}
            priority
            quality={100}
            unoptimized
          />
        </div>

        <div className="h-full sm:w-1/2 sm:p-8">
          <h1 className="text-2xl font-bold sm:pb-2 sm:text-4xl">
            {product.product_name}
          </h1>

          {/* <p className="text-sm text-muted-foreground"> */}
          {/*   ID: {product.id}-XA12-25 */}
          {/* </p> */}
          <p className="text-lg font-bold text-farm sm:text-2xl">
            <span className="pr-2 text-base font-light text-muted-foreground line-through sm:text-lg">
              ₱{(product.price + 20).toFixed(2)}
            </span>
            ₱{product.price.toFixed(2)}
          </p>

          <div className="flex w-full items-center gap-4 border-b border-border py-2">
            <Image
              src="/stars.png"
              alt="Ratings"
              className="w-full max-w-[130px]"
              width={100}
              height={20}
              priority
              quality={100}
              unoptimized
            />

            <p className="text-sm font-light text-muted-foreground">
              Consumer Reviews
            </p>
          </div>
          {/* <p>Unit: {product.unit}</p> */}
          {/* <p>Farm Name: {product.farm_name}</p> */}
        </div>
      </main>
    </Container>
  );
}
