import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  name,
  price,
  unit,
  farm,
  image,
}: {
  name: string;
  price: number;
  unit: string;
  farm: string;
  image: string;
}) {
  return (
    <Link href="#" className="">
      <Image
        src={image}
        alt={name}
        className="h-[125px] w-full object-contain"
        width={200}
        height={200}
      />

      <div className="w-full border-b px-10 pb-2">
        <Image
          src="/stars.png"
          alt="Ratings"
          className="w-full"
          width={100}
          height={20}
        />
      </div>

      <div className="max-h-15 p-3">
        <h1 className="text-sm font-semibold">{name}</h1>
        <h2 className="text-xs text-orange-500">
          ₱{price.toFixed(2)}/{unit}
        </h2>
        <p className="text-xs text-muted-foreground">{farm}</p>
      </div>
    </Link>
  );
}
