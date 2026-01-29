import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageSrc="/products-kite.png"
        imageAlt="Kite"
        title="Kite"
        description={`Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.`}
        primaryAction={{
          text: "Try Demo",
          icon: "ri-arrow-right-long-line",
        }}
        secondaryAction={{
          text: "Learn More",
          icon: "ri-arrow-right-long-line",
        }}
        storeImages={[
          { src: "/google-play.svg", alt: "Google Play" },
          { src: "/appstore.svg", alt: "App Store" },
        ]}
      />

      <RightSection
        title="Console"
        description={`The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.`}
        action={{
          text: "Learn more",
          icon: "ri-arrow-right-long-line",
        }}
        imageSrc="/products-console.png"
        imageAlt="Console"
      />

      <LeftSection
        imageSrc="/products-coin.png"
        imageAlt="Coin"
        title="Coin"
        description={`Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.`}
        primaryAction={{
          text: "Coin",
          icon: "ri-arrow-right-long-line",
        }}
        secondaryAction=""
        storeImages={[
          { src: "/google-play.svg", alt: "Google Play" },
          { src: "/appstore.svg", alt: "App Store" },
        ]}
      />

      <RightSection
        title="Kite Connect API"
        description={`Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.`}
        action={{
          text: "Kite Connect",
          icon: "ri-arrow-right-long-line",
        }}
        imageSrc="/landing2.svg"
        imageAlt="Console"
      />

      <LeftSection
        imageSrc="/varsity-products.svg"
        imageAlt="Varsity mobile"
        title="Varsity mobile"
        description={`An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.`}
        primaryAction=""
        secondaryAction=""
        storeImages={[
          { src: "/google-play.svg", alt: "Google Play" },
          { src: "/appstore.svg", alt: "App Store" },
        ]}
      />

      <Universe />
    </>
  );
}
