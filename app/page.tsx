import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <Container>
      {/* Hero Section */}
      <section className="grid pt-6 md:grid-cols-2 xl:px-10">
        <div className="pb-8 md:pt-16">
          <Image
            src="/logo.svg"
            alt="Agira Logo"
            className="hidden md:block"
            width={100}
            height={100}
          />

          <h1 className="pt-8 text-4xl font-bold md:text-5xl xl:text-7xl">
            Nature&apos;s fresh right at your doorstep.
          </h1>

          <p className="py-6 text-base font-medium text-muted-foreground md:text-lg lg:text-xl">
            Discover the freshest picks of the day, straight from our local
            farms. Don&apos;t miss out on seasonal favorites and specialty
            items!
          </p>

          <div className="flex gap-2">
            <Button className="animate-buttonheartbeat bg-farm text-lg text-white hover:bg-farm/80 xl:px-8 xl:py-6 xl:text-xl">
              Get Started
            </Button>

            <Button
              variant="ghost"
              className="px-4 text-lg text-farm hover:text-farm xl:py-6"
            >
              <Image
                src="/play.svg"
                alt="Play"
                width={15}
                height={15}
                priority
              />
              <span className="pl-4">Watch Video</span>
            </Button>
          </div>
        </div>

        <div className="flex items-end justify-center md:justify-end">
          <Image src="/jeo.svg" alt="Jeo the Farmer" width={553} height={616} />
        </div>
      </section>

      <section className="h-[516px] rounded-t-3xl bg-gradient-to-b from-slate-200/80 to-white"></section>
      <section className="h-[516px]"></section>
    </Container>
  );
}
