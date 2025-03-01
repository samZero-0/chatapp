import HomeBanner from "@/components/Home/Banner";
import KeyFeatures from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItWorks";
import PricingPlans from "@/components/Home/Pricing";


export default function Home() {
  return (
    <div >
        <HomeBanner></HomeBanner>
        <KeyFeatures></KeyFeatures>
        <HowItWorks></HowItWorks>
        <PricingPlans></PricingPlans>
       
    </div>
  );
}
