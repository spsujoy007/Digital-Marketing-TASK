import SectionFive_Featured from "@/Components/Home/SectionFive_Featured";
import SectionFour_Services from "@/Components/Home/SectionFour_Services";
import SectionOne from "@/Components/Home/SectionOne";
import SectionSix_Testimonial from "@/Components/Home/SectionSix_Testimonial";
import SectionThree_whoWeAre from "@/Components/Home/SectionThree_whoWeAre";
import SectionTwo_workWith from "@/Components/Home/SectionTwo_workWith";

export default function Home() {
  return (
    <div>
      <SectionOne></SectionOne>
      <SectionTwo_workWith></SectionTwo_workWith>
      <SectionThree_whoWeAre></SectionThree_whoWeAre>
      <SectionFour_Services></SectionFour_Services>
      <SectionFive_Featured></SectionFive_Featured>
      <SectionSix_Testimonial></SectionSix_Testimonial>
    </div>
  );
}
