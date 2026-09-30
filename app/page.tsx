"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { extraSearchData, searchData } from "./assets/course-searchdatat";
import { courseData } from "./assets/courseData";
import Services from "./components/Services";
import Review from "./components/Review";
import HomePageCourse from "./components/HomePageCourse";
import CreateManage from "./components/CreateManage";

export default function Home() {
  return (
    <div className="w-full m-0 p-0 box-border">
      <div
        className="h-fit bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
      >
        <Navbar />
        <p className="text-[70px] text-slate-200 mt-15 pb-8 text-center font-bold">
          Get Access to Hundreds <br />
          Courses Available
        </p>
        <p className="text-[18px] text-slate-200 text-center pt-5 pb-10">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="relative flex items-center justify-center gap-2 pb-5">
          <input
            className="bg-slate-100 py-2 px-3 rounded-xl"
            type="search"
            placeholder="Course,topic,creator"
          />
          <p className="py-2 px-3 bg-[#D4FB20] rounded-xl text-[18px] text-slate-600">
            Search
          </p>
          <Image
            className="absolute right-0"
            src="/green-mask.png"
            width={250}
            height={80}
            alt="green-rectangle"
          />
          <Image
            className="absolute left-0"
            src="/green-zigzag.png"
            width={250}
            height={80}
            alt="green-zigzag"
          />
        </div>
        {/* <div className="relative flex w-full items-center justify-center">
          <Image
            className="mt-20 flex items-center justify-center justify-self-center"
            src="/Ellipse-green.png"
            width={800}
            height={80}
            alt="green-zigzag"
          />
          <Image
            className="absolute bottom-0 left-130"
            src="/laptop-boy.png"
            width={500}
            height={80}
            alt="green-zigzag"
          />
          <Image
            className="relative bottom-0 left-[-850px]"
            src="/white-circle.png"
            width={200}
            height={80}
            alt="green-zigzag"
          />
          <Image
            className="relative bottom-0 left-0"
            src="/login_zigzag.png"
            width={200}
            height={80}
            alt="green-zigzag"
          />
        </div> */}
        {/* HERO IMAGE AREA */}
        <div className="relative mx-auto mt-16 h-[520px] w-full max-w-[1200px] overflow-hidden">
          {/* 1. Big green semicircle (center, bottom) */}
          <Image
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            src="/Ellipse-green.png"
            width={900}
            height={450}
            alt="green background shape"
          />

          {/* 2. Boy with laptop (center, bottom) */}
          <Image
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            src="/laptop-boy.png"
            width={480}
            height={500}
            alt="student with laptop"
          />

          {/* 3. White decorative shapes */}
          <Image
            className="absolute left-[14%] top-0"
            src="/login_zigzag.png"
            width={90}
            height={90}
            alt=""
          />
          <Image
            className="absolute right-[14%] top-0"
            src="/Cone.png"
            width={120}
            height={120}
            alt=""
          />
          <Image
            className="absolute bottom-[8%] left-[2%]"
            src="/white-circle.png"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="absolute right-[3%] top-[30%]"
            src="/login_zigzag.png"
            width={160}
            height={200}
            alt=""
          />

          {/* 4. Floating cards */}
          {/* UI/UX card */}
          <div className="absolute left-[26%] top-[14%] rounded-xl bg-white px-4 py-3 shadow-lg">
            <p className="text-sm font-semibold text-slate-800">UI/UX Design</p>
            <p className="text-[10px] text-slate-400">
              200 Courses · 1000+ Students
            </p>
          </div>

          {/* Learning progress card */}
          <div className="absolute right-[22%] top-[18%] w-56 rounded-xl bg-white px-4 py-3 shadow-lg">
            <p className="text-[11px] text-slate-400">Learning Progress</p>
            <p className="text-3xl font-bold text-slate-800">55%</p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>

          {/* Happy students card */}
          <div className="absolute bottom-[16%] left-[18%] rounded-xl bg-white px-4 py-3 shadow-lg">
            <p className="text-sm font-semibold text-slate-800">
              Happy Students
            </p>
            <p className="text-[11px] text-slate-400">4.5 (240) ★</p>
            <div className="mt-2 flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-slate-300 first:ml-0"
                />
              ))}
              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4FB20] text-[10px] font-bold">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*hero section end here  */}
      <div className="bg-[#F5F5F6] py-10 flex justify-center items-center gap-3">
        <Image
          src="/Logo_Partner.png"
          width={800}
          height={80}
          alt="logo partner"
        />
      </div>
      <div className="my-10 py-5 w-[80%] flex flex-col justify-self-center items-center justify-center">
        <p className="text-4xl text-center font-bold">
          Discover Your Passion, <br />
          Build Your Skill
        </p>
        <p className="mt-2 text-center">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different <br /> fields, from
          technology to the arts, and make a difference in your career and life.
        </p>
        <div className="my-10">
          <div className="w-[70%] flex justify-self-center items-center flex-wrap justify-around gap-1 py-2">
            {searchData?.map((data) => (
              <p
                key={data.i}
                className="inline py-1 px-2 rounded-xl bg-gray-200 mb-10"
              >
                {data}
              </p>
            ))}
            {extraSearchData?.map((data) => (
              <p
                key={data.i}
                className="inline py-1 px-2 rounded-xl bg-gray-200 mb-10"
              >
                {data}
              </p>
            ))}
          </div>
        </div>
      </div>
      <HomePageCourse />
      <Services />
      <CreateManage />
      <Review />
      <Footer />
    </div>
  );
}
