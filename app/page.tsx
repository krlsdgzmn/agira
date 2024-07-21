import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeatureCard from "./_components/feature-card";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      {/* Hero Section */}
      <section className="grid justify-center pt-6 text-center md:grid-cols-2 md:justify-start md:text-left xl:px-10">
        <div className="mx-auto flex flex-col md:justify-end md:pb-16 lg:justify-center lg:pt-16">
          <Image
            src="/logo.svg"
            alt="Agira Logo"
            className="hidden aspect-square h-20 w-20 lg:block lg:h-[100px] lg:w-[100px]"
            width={100}
            height={100}
          />

          <h1 className="pt-8 text-5xl font-bold sm:max-w-[450px] md:text-5xl xl:max-w-[800px] xl:text-7xl">
            Nature&apos;s fresh right at your doorstep.
          </h1>

          <p className="py-6 text-base font-medium text-muted-foreground sm:max-w-[450px] sm:text-lg lg:max-w-max lg:text-xl">
            Discover the freshest picks of the day, straight from our local
            farms. Don&apos;t miss out on seasonal favorites and specialty
            items!
          </p>

          <div className="flex justify-center gap-2 md:justify-start">
            <Link href="/sign-up">
              <Button className="animate-buttonheartbeat bg-farm text-lg text-white hover:bg-farm/80 xl:px-8 xl:py-6 xl:text-xl">
                Get Started
              </Button>
            </Link>

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
          <Image
            src="/jeo.png"
            alt="Jeo the Farmer"
            width={553}
            height={616}
            priority
          />
        </div>
      </section>

      <section className="grid min-h-[300px] rounded-t-3xl bg-gradient-to-b from-slate-200/80 to-white py-8 md:grid-cols-3">
        <FeatureCard
          title="Local Farms Guaranteed"
          description="Support our local farmers, fresh goods come from your local community!"
          icon="/red-icon.svg"
        />

        <FeatureCard
          title="100% Fresh Everyday"
          description="Enjoy the freshest produce available now. Our seasonal selection ensures you get the best taste and nutritional value."
          icon="/yellow-icon.svg"
        />

        <FeatureCard
          title="Customize Your Box"
          description="Choose from a variety of subscription plans to fit your needs. Whether you prefer a weekly surprise or handpicking your favorites, we have you covered."
          icon="/green-icon.svg"
        />
      </section>

      <section className="h-[516px]"></section>
    </Container>
  );
}
