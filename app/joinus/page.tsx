"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { searchData } from "../assets/course-searchdatat";
import { courseData } from "../assets/courseData";
import Footer from "../components/Footer";
import { useState } from "react";


export default function Joinus() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const filteredCourses =
    selectedCategory === "Featured"
      ? courseData
      : courseData.filter(
          (course) =>
            course.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );
  return (
    <div className="w-full m-0 p-0 box-border">
      <div
        className="w-full h-[10%] bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
      >
        <Navbar />
        <p className="mt-17.5 mb-3 text-[44px] font-bold text-slate-300 text-center">
          Find Your Next Course
        </p>
        <div className="flex items-center justify-center gap-2 pb-8">
          <input
            className="pl-3 py-2 w-[350px] rounded-xl bg-slate-200"
            type="search"
            placeholder="Search"
          />
          <p className="py-1.5 px-2 bg-[#D4FB20] rounded-xl font-bold text-black text-[18px]">
            Courses
          </p>
        </div>
      </div>
      {/* filter and course part */}
      <div className="w-[85%] mt-10 flex justify-self-center flex-col">
        <div className="flex items-center justify-between text-[14px] text-slate-600">
          <div className="flex gap-2">
            <div className="flex items-center justify-center border border-gray-400 px-2 rounded-xl">
              <i className="fa-solid fa-filter"></i>
              <p>filter</p>
            </div>
            <div className="flex items-center justify-center border border-gray-400 px-2 rounded-xl">
              <i className="fa-solid fa-chart-simple"></i>
              <p>level</p>
            </div>
            <div className="flex items-center justify-center border border-gray-400 px-2 rounded-xl">
              <i className="fa-solid fa-table-cells-large"></i>
              <p>category</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center border border-gray-400 py-1 px-2 rounded-xl">
              <i className="fa-regular fa-star"></i>
              <p>most relavent</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center flex-wrap justify-around gap-1 py-2">
            {/* {searchData?.map((data) => (
              <p
                key={data.i}
                className="inline py-1 px-2 rounded-xl bg-gray-200 mb-10"
              >
                {data}
              </p>
            ))} */}
            {searchData?.map((data) => {
              const isActive = selectedCategory === data;

              return (
                <button
                  key={data}
                  type="button"
                  onClick={() => setSelectedCategory(data)}
                  className={`inline cursor-pointer rounded-xl px-3 py-1.5 mb-10 transition ${
                    isActive
                      ? "bg-[#D4FB20] text-black font-bold"
                      : "bg-gray-200 text-slate-700 hover:bg-gray-300"
                  }`}
                >
                  {data}
                </button>
              );
            })}
          </div>
        </div>

        {/* courses card */}
        <div className="w-full flex items-center justify-around gap-4 pb-15 flex-wrap">
          {/* {courseData.map((course) => (
            <div
              key={course.id}
              className="shadow-md border border-gray-200 px-4 py-2 rounded-xl block w-fit"
            >
              <Image
                src={course.src}
                width={300}
                height={100}
                alt="course image"
              />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-[18px] font-bold pt-2">{course.title}</p>
                    <p className="text-[12px]">
                      by <span className="text-blue-600">{course.author}</span>
                    </p>
                  </div>
                  <div className="text-gray-400 text-[14px] flex items-center">
                    <p>{course.rating}</p>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
                <Image
                  className="py-2"
                  src={course.src2}
                  width={150}
                  height={80}
                  alt="course image"
                />
                <p className="text-blue-700 text-[14px] font-bold pb-2">
                  {" "}
                  ${course.price}{" "}
                  <span className="text-[11px] text-gray-400">
                    /{course.access}
                  </span>
                </p>
              </div>
            </div>
          ))} */}
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="shadow-md border border-gray-200 px-4 py-2 rounded-xl block w-fit"
            >
              <Image
                src={course.src}
                width={300}
                height={100}
                alt="course image"
              />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-[18px] font-bold pt-2">{course.title}</p>
                    <p className="text-[12px]">
                      by <span className="text-blue-600">{course.author}</span>
                    </p>
                  </div>
                  <div className="text-gray-400 text-[14px] flex items-center">
                    <p>{course.rating}</p>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </div>
                <Image
                  className="py-2"
                  src={course.src2}
                  width={150}
                  height={80}
                  alt="course image"
                />
                <p className="text-blue-700 text-[14px] font-bold pb-2">
                  {" "}
                  ${course.price}{" "}
                  <span className="text-[11px] text-gray-400">
                    /{course.access}
                  </span>
                </p>
              </div>
            </div>
          ))}

          {/* test with another div */}
          {/* <div className="border border-yellow-400 p-2 rounded block w-fit">
            <Image
              src="/course-img-1.png"
              width={300}
              height={100}
              alt="course image"
            />
            <div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-3xl">title</p>
                  <p className="text-[12px]">
                    by <span className="text-blue-600">author</span>
                  </p>
                </div>
                <div className="text-gray-400 text-[14px] flex items-center">
                  <p>rating</p>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <Image
                src="/course-img-7.png"
                width={150}
                height={80}
                alt="course image"
              />
              <p className="text-blue-700 text-[14px] font-bold">
                {" "}
                $ Price{" "}
                <span className="text-[11px] text-gray-400">/access</span>
              </p>
            </div>
          </div> */}
          {/* test end */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
