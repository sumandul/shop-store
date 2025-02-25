"use client";

import useLocation from "@/hooks/useLocation";
import Banner from "@/components/homeSlider/page";
import Service from "@/components/service/page";
import ShoesGrid from "@/components/collection/page";
import NewArrival from "@/components/collection/newarrival/page";
import ModalPopUP from "@/components/common/sidebar/modal/page";
import Newsletter from "@/components/home/service/new-letter/page";
import BrandLogo from "@/components/brand/page";

export default function Home() {
  const location = useLocation();
  console.log(location, "suamn");
  return (
    <div>
      <div className=" ">
        <ModalPopUP />
        <Banner />
        <div className=" my-10 container flex flex-col gap-[6rem] mx-auto">
          <NewArrival />
          <Service />
          <ShoesGrid />
        </div>
        <div className=" flex flex-col gap-8 ">
          <Newsletter />
          <BrandLogo />
        </div>
        {/* <BrandCarousel /> */}
      </div>
    </div>
  );
}
