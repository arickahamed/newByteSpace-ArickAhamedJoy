import Image from "next/image";
import { servicesData } from "../assets/serviceData";

import React from 'react'

export default function Services() {
  return (
    <div className="w-[80%] flex flex-col justify-self-center">
      <p className="text-center text-[36px] mt-5">
        Explore Diverse Learning Paths at Bytespace
      </p>
      <p className="text-center mb-10 text-[14px] w-[80%] text-slate-500 m-auto">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="mb-10">
        <div className="w-[80%] flex justify-self-center items-center justify-around flex-wrap gap-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="border border-gray-400 py-3 px-4 rounded-xl block flex flex-col items-center justify-center"
            >
              <Image
                className="border border-gray-400 rounded-[50%] p-1 bg-[#D4FB20]"
                src={service.src}
                width={30}
                height={20}
                alt="icon"
              />
              <p className="text-[12px] mt-2">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
