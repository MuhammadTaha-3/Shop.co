// import React from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <main className=" max-w-screen-2xl  mx-auto flex w-full justify-between items-start bg-[#F2F0F1]  md:h-[500px] flex-col h-full md:flex-row">
//       {/* left section */}
//       <div className="md:w-[500px] pl-3 w-full mt-3 md:mt-11 md:ml-11">
//         <h1 className="md:text-5xl  text-2xl font-extrabold">
//           FIND CLOTHES THAT MATCHES YOUR STYLES
//         </h1>
//         <p className="text-sm md:mt-3">
//           Browse through our diverse range of melidiously crafted garments,
//           designed to bring out your individuality and cater to your sense of
//           style.
//         </p>
//         <button className="bg-black py-2 px-9 text-white mt-4 hover:bg-gray-700  text-sm rounded-[16px]">
//           {" "}
//           Shop Now
//         </button>
//       </div>
//       {/* Right section */}
//       <div className="relative ">
//         <Image
//           src={"/profile.png"}
//           alt="hero"
//           width={400}
//           height={400}
//           className="w-[500px] mr-4 "
//         ></Image>
//         <Image
//           src={"/smallstar.png"}
//           alt="small"
//           width={200}
//           height={200}
//           className="w-[50px] md:w-[100px] left-10 absolute top-[100px] md:top-[300px] md:left-[-100px]"
//         ></Image>

//         <Image
//           src={"/bigstar.png"}
//           alt="big"
//           width={200}
//           height={200}
//           className="md:w-[100px] w-[70px] absolute top-10 right-[50px] md:top-[50px] md:right-[10px]"
//         ></Image>
//       </div>
//     </main>
//   );
// }

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <main id="hero-section" className="max-w-screen-2xl mx-auto flex w-full justify-between items-start bg-[#F2F0F1] md:h-[500px] flex-col h-full md:flex-row">
      {/* Left Section */}
      <div className="md:w-[500px] pl-3 w-full mt-3 md:mt-11 md:ml-11">
        <h1 className="md:text-5xl text-2xl font-extrabold">
          FIND CLOTHES THAT MATCH YOUR STYLES
        </h1>
        <p className="text-sm md:mt-3">
          Browse through our diverse range of melidiously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <a href="#page">
          <button className="bg-black py-2 px-9 text-white mt-4 hover:bg-gray-700 text-sm rounded-[16px]">
            Shop Now
          </button>
        </a>
      </div>
      {/* Right Section */}
      <div className="relative">
        <Image
          src={"/profile.png"}
          alt="hero"
          width={400}
          height={400}
          className="w-[500px] mr-4"
        ></Image>
        <Image
          src={"/smallstar.png"}
          alt="small"
          width={200}
          height={200}
          className="w-[50px] md:w-[100px] left-10 absolute top-[100px] md:top-[300px] md:left-[-100px]"
        ></Image>

        <Image
          src={"/bigstar.png"}
          alt="big"
          width={200}
          height={200}
          className="md:w-[100px] w-[70px] absolute top-10 right-[50px] md:top-[50px] md:right-[10px]"
        ></Image>
      </div>
    </main>
  );
}
