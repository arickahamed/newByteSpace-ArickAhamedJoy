import Image from "next/image";
import React from "react";

export default function CreateManage() {
  return (
    <div
      className="w-full m-0 p-0 box-border border border-amber-400 bg-gradient-to-tr from-teal-700 to-emerald-400;
"
    >
      <div className="w-[80%] flex items-center justify-around gap-3 justify-self-center  mt-10 mb-5 ">
        <div className="w-[50%]">
          <p className="text-[44px] font-bold">
            Your Path to Professional <br /> Growth Starts Here!
          </p>
          <p className="text-[18px] text-slate-600 py-5">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>
          <div className="flex mt-8 gap-4">
            <div>
              <p className="text-[36px] text-blue-500">12k</p>
              <p className="text-[18px]">Students</p>
            </div>
            <div>
              <p className="text-[36px] text-blue-500">70+</p>
              <p className="text-[18px]">Courses</p>
            </div>
            <div>
              <p className="text-[36px] text-blue-500">16</p>
              <p className="text-[18px]">Creators</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/Creator_Card_1.png"
            width={300}
            height={100}
            alt="creator card"
          />
          <Image
            className="absolute top-[30%]"
            src="/laptop-boy.png"
            width={800}
            height={800}
            alt="creator card"
          />
        </div>
      </div>
      <div className="w-[80%] flex items-center justify-around gap-3 justify-self-center mt-10 mb-5">
        <div className="relative">
          <Image
            className="z-20"
            src="/girlimage.png"
            width={500}
            height={100}
            alt="girl image"
          />
          <Image
            className="absolute top-20 z-[-10]"
            src="/revinue1.png"
            width={200}
            height={100}
            alt="girl image"
          />
          <Image
            className="absolute top-70 z-[-10]"
            src="/revinue2.png"
            width={100}
            height={100}
            alt="girl image"
          />
          <Image
            className="absolute top-90 left-70"
            src="/happy-student.png"
            width={200}
            height={100}
            alt="girl image"
          />
          <Image
            className="absolute top-40 left-80 text-green-300"
            src="/green-zigzag.png"
            width={100}
            height={100}
            alt="girl image"
          />
        </div>
        <div className="w-[40%]">
          <p className="text-[44px] font-bold pb-3">
            Create & Manage <br /> Courses Easily
          </p>
          <p className="text-[16px] py-5">
            <b>ByteSpace</b> supports individuals or entities in the creation,
            publication, and administration of educational courses.{" "}
          </p>
          <div className="my-5 flex flex-col text-[16px]">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check">
                
              </i>
              <p>Share Your Expertise</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              <p>Monetize Your Passion</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              <p>Flexibility and Autonomy</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              <p>Build a Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
