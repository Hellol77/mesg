import Image from "next/image";
import React, { useContext } from "react";
import example from "/public/images/example.png";
import { ResultDataContext } from "@/context/ContextProvider";

export default function BigCircleImage() {
  const resultData = useContext(ResultDataContext);

  return (
    <div
      className={`relative  rounded-full w-[11rem] h-[11rem]  flex justify-center items-center`}
    >
      <div className="z-0 absolute w-[2.3125rem] h-[2.3125rem] bg-brandColor rounded-full top-3 left-3"></div>
      <Image
        src={resultData?.company_img ? resultData?.company_img : example}
        alt="example"
        width={500}
        height={10}
        className="relative w-full object-cover"
      />
    </div>
  );
}
