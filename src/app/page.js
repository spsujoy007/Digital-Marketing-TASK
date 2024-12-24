import SectionOne from "@/Components/Home/SectionOne";
import SectionThree_whoWeAre from "@/Components/Home/SectionThree_whoWeAre";
import SectionTwo_workWith from "@/Components/Home/SectionTwo_workWith";

export default function Home() {
  return (
    <div>
      <SectionOne></SectionOne>
      <SectionTwo_workWith></SectionTwo_workWith>
      <SectionThree_whoWeAre></SectionThree_whoWeAre>
    </div>
  );
}
