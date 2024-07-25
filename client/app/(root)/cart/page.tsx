import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { cart, products } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

const cartProducts = cart
  .map((cartItem) => {
    const product = products.find(
      (product) => product.id === cartItem.product_id,
    );
    if (!product) return null; // Filter out if the product is not found
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  })
  .filter((product) => product !== null); // Remove null values

const subtotal = cartProducts.reduce(
  (total, item) => total + item.price * item.quantity,
  0,
);

const deliverFee = 150;

const total = subtotal + deliverFee;

export default function CartPage() {
  return (
    <Container className="flex min-h-[85vh] flex-col py-8">
      <main className="flex h-full w-full flex-col gap-4 sm:flex-row">
        <section className="h-full w-full sm:w-3/5">
          <h1 className="text-xl font-bold sm:text-2xl">Shopping Cart</h1>
          <p className="pb-4 text-muted-foreground">
            You have {cart.length} items in your cart
          </p>

          <div className="flex flex-col gap-4">
            {cartProducts.map((product) => (
              <Link
                href={`/marketplace/products/${product.id}`}
                key={product.id}
                className="flex h-[110px] justify-between rounded-md border p-4 shadow"
              >
                <div className="flex max-h-[100px] w-[300px] items-center gap-2">
                  <div className="w-[75px]">
                    <Image
                      src={product.image}
                      alt={product.product_name}
                      className="object-contain"
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h1 className="font-bold">{product.product_name}</h1>
                      <h2 className="text-sm text-muted-foreground">
                        {product.farm_name}
                      </h2>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      Quantity: {product.quantity}
                    </div>
                  </div>
                </div>

                <div className="flex items-end text-sm font-medium">
                  ₱{product.price.toFixed(2)}/{product.unit}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="h-full w-full sm:w-2/5">
          <h1 className="text-xl font-bold sm:text-2xl">Order Summary</h1>
          <p className="pb-4 text-muted-foreground">
            Check Your Order Details Below
          </p>

          <div className="rounded-lg border p-4">
            <h1 className="font-bold">Products</h1>
            {cartProducts.map((product) => (
              <div key={product.id}>
                <div className="flex justify-between pt-2 text-sm">
                  <div className="font-medium">{product.product_name}</div>
                  <div>
                    {product.quantity} {product.unit}
                  </div>
                </div>

                <div className="flex justify-between border-b py-2 text-sm text-muted-foreground">
                  <p>
                    {product.quantity} x ₱{product.price.toFixed(2)}
                  </p>
                  <p className="font-medium">
                    ₱{(product.quantity * product.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex justify-between py-2 text-sm font-medium">
              <h2>Subtotal</h2>
              <p>₱{subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between pb-2 text-sm font-medium">
              <h2>Delivery Fee</h2>
              <p>₱{deliverFee.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between border-t pt-4 text-xl md:text-2xl">
              <h2 className="font-bold">₱{total.toFixed(2)}</h2>
              <Button size="sm" className="bg-farm hover:bg-farm/90">
                Place Order
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
