'use client'
import Footer from "@/Components/Home/Footer";
import SectionEight_pricingTable from "@/Components/Home/SectionEight_pricingTable";
import SectionFive_Featured from "@/Components/Home/SectionFive_Featured";
import SectionFour_Services from "@/Components/Home/SectionFour_Services";
import SectionNine_Blogs from "@/Components/Home/SectionNine_Blogs";
import SectionOne from "@/Components/Home/SectionOne";
import SectionSeven_WhyChoseUs from "@/Components/Home/SectionSeven_WhyChoseUs";
import SectionSix_Testimonial from "@/Components/Home/SectionSix_Testimonial";
import SectionThree_whoWeAre from "@/Components/Home/SectionThree_whoWeAre";
import SectionTwo_workWith from "@/Components/Home/SectionTwo_workWith";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Home() {
  const [dets, setDets] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setDets({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    if (dets.x && dets.y) {
      gsap.to('.cursor', {
        x: dets.x - 25, // Offset for better alignment
        y: dets.y - 25,
        duration: 0.5,
        ease: "back.Out",
      });
    }

    if (dets.x && dets.y) {
      gsap.to('.cursorDot', {
        x: dets.x - 5,
        y: dets.y - 5,
        duration: 1,
        ease: "back.Out",
      });
    }
  }, [dets]); // Runs when `dets` changes

  // const handleMouseEnter = () => {
  //   gsap.to('.cursor', {
  //     x: dets.x - 25, // Offset for better alignment
  //     y: dets.y - 25,
  //     duration: 0.5,
  //     borderColor: "#fff",
  //     ease: "back.Out",
  //   });

  //   gsap.to('.cursorDot', {
  //     x: dets.x - 5, // Offset for better alignment
  //     y: dets.y - 5,
  //     duration: 1,
  //     b: "#fff",
  //     ease: "back.Out",
  //   });
  // }

  return (
    <div onMouseMove={(dets) => {
      handleMouseMove(dets)
    }} className="relative">
      <div className="cursor w-[50px] h-[50px] rounded-full border-[1px] border-[#360ce2] fixed z-[100]"></div>
      <div className="cursorDot w-[10px] h-[10px] rounded-full bg-[#360ce2] fixed z-[100]"></div>

      <SectionOne></SectionOne>
      <SectionTwo_workWith></SectionTwo_workWith>
      <SectionThree_whoWeAre></SectionThree_whoWeAre>
      <SectionFour_Services></SectionFour_Services>
      <SectionFive_Featured></SectionFive_Featured>
      <SectionSix_Testimonial></SectionSix_Testimonial>
      <SectionSeven_WhyChoseUs></SectionSeven_WhyChoseUs>
      <SectionEight_pricingTable></SectionEight_pricingTable>
      <SectionNine_Blogs></SectionNine_Blogs>
      <Footer></Footer>
    </div>
  );
}
