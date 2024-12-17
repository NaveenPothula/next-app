import Image from "next/image";
import Header from "@/components/header";
import Heading from "@/components/heading"
import Tabs from "@/components/tabs";
import Flex from "@/components/flex"
import Benefits from "@/components/benefits"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
    <Header/>
    <Heading/>
    <Tabs/>
    <Flex/>
    <Benefits/>
    <Features/>
    <Pricing/>
    <Footer/>

    </>
  );
}
