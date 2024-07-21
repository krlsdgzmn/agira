import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FarmCard from "./_components/farm-card";
import FeatureCard from "./_components/feature-card";

export default function HomePage() {
  return (
    <Container className="overflow-hidden">
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
            quality={100}
            unoptimized
            priority
          />
        </div>
      </section>

      <section className="grid min-h-[300px] rounded-t-3xl bg-gradient-to-b from-slate-200/80 to-white py-8 md:grid-cols-3 md:py-16">
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

      <section className="mx-auto min-h-[300px] max-w-screen-xl pb-20">
        <div className="flex flex-col px-2 text-center md:flex-row md:items-end md:justify-between">
          <h1 className="text-2xl font-bold md:text-left">Trusted Farms</h1>
          <Link
            href="/sign-up"
            className="font-medium text-farm hover:underline"
          >
            View all farms &rarr;
          </Link>
        </div>

        <div className="grid justify-center gap-4 pt-2 md:grid-cols-3 xl:gap-8 xl:pt-4">
          <FarmCard
            title="Kamalig Farm"
            location="Tarlac"
            image="/farm-1.png"
          />
          <FarmCard title="Haven Farm" location="Bulacan" image="/farm-2.png" />
          <FarmCard
            title="Westija Farm"
            location="Nueva Ecija"
            image="/farm-3.png"
          />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-8">
        <div className="relative mx-auto w-fit">
          <h1 className="mx-auto w-fit bg-gradient-to-r from-farm to-yellow-400 bg-clip-text py-2 text-3xl font-bold text-transparent md:text-5xl">
            The Future&apos;s Bright
          </h1>
          <p className="text-center font-medium text-muted-foreground md:text-lg">
            Take a peek on how Agira will evolve throughout its development.
          </p>
        </div>

        <div className="grid pt-8 md:pt-16 lg:grid-cols-2">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div className="text-sm xl:text-base">
              <Image src="/q2-icon.svg" alt="Q2" width={48} height={48} />
              <h1 className="py-2 text-lg font-bold lg:text-xl">Q2 2024</h1>
              <p className="text-muted-foreground">
                In June 2024, Agira established the platform&apos;s{" "}
                <span className="font-semibold">core online backbone</span> and
                launched initiatives for decentralized financing, tokenization,
                and accessibility. <br /> <br /> Comprehensive{" "}
                <span className="font-semibold">partnership propositions</span>{" "}
                were also introduced to enhance user engagement.
              </p>
            </div>

            <div className="text-sm xl:text-base">
              <Image src="/q3-icon.svg" alt="Q3" width={48} height={48} />
              <h1 className="py-2 text-lg font-bold lg:text-xl">Q3 2024</h1>
              <p className="text-muted-foreground">
                From July to December 2024, Agira will conduct a{" "}
                <span className="font-semibold">pilot launch</span> to gather
                user data and feedback, onboarding initial producers and
                consumers. <br /> <br />{" "}
                <span className="font-semibold">Partnerships</span> with local
                agricultural organizations and{" "}
                <span className="font-semibold">sponsorships</span> from
                cooperative associations and governmental institutions will be
                established.
              </p>
            </div>

            <div className="text-sm xl:text-base">
              <Image src="/q4-icon.svg" alt="Q4" width={48} height={48} />
              <h1 className="py-2 text-lg font-bold lg:text-xl">Q4 2024</h1>
              <p className="text-muted-foreground">
                The introduction of <span className="font-semibold">$GIRA</span>
                will include the Agira Wallet,{" "}
                <span className="font-semibold">Web3.0</span> decentralization,
                smart contracts, and financial tools like microloan options and
                grant applications.
              </p>
            </div>

            <div className="text-sm xl:text-base">
              <Image src="/2025-icon.svg" alt="Q4" width={48} height={48} />
              <h1 className="py-2 text-lg font-bold lg:text-xl">
                2025 and Beyond
              </h1>
              <p className="text-muted-foreground">
                Starting in 2025, Agira will integrate AI for{" "}
                <span className="font-semibold">predictive analytics</span> ,
                supply chain optimization, blockchain-based traceability, and
                automated financial advising.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/map-1-bg.png"
              alt="Agira Platform"
              className="absolute right-[-17rem] top-5 hidden scale-150 lg:block"
              height={1568}
              width={1797}
              quality={100}
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-[10rem]"></section>
    </Container>
  );
}
