import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/Vector (2).png",
  },
  {
    id: "zara",
    srcUrl: "/Vector (3).png",
  },
  {
    id: "gucci",
    srcUrl: "/Vector (4).png",
  },
  {
    id: "prada",
    srcUrl: "/Vector (5).png",
  },
  {
    id: "calvin-klein",
    srcUrl: "/Vector (1).png",
  },
];

const Brands = () => {
  return (
    <div className="bg-black  max-w-screen-2xl mx-auto ">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={122}
            width={1440}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;