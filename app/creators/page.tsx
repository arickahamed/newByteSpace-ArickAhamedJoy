"use client";
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { courseData } from '../assets/courseData';
import Footer from '../components/Footer';

export default function Creators() {
  
    const filteredAuthorCourses = courseData.filter(
      (course) => course.author?.toLowerCase() === "doin tech",
    );
  return (
    <div className="w-full m-0 p-0 box-border">
      {/* top section */}
      <div
        className="bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
      >
        <Navbar />
        <div className="w-[80%] py-10 flex flex-col justify-self-center">
          <div className=" flex gap-2">
            <div>
              <Image
                className="bg-black py-3 px-1 rounded-xl"
                src="/doin tech.png"
                width={80}
                height={80}
                alt="creator profile pic"
              />
            </div>
            <div className="text-slate-300">
              <div className="flex items-center gap-2">
                <p className="text-[20px] font-bold">Doin Tech</p>
                <p className="bg-[#D4FB20] text-black px-2 rounded-md">
                  creator
                </p>
              </div>
              <p className="text-[14px]">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <div className="py-5 text-slate-300">
            <p className="">
              Welcome to the creative world of [Creator's Name]. Here, you'll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let's explore and learn together!
            </p>
            <p>
              ive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>
          <div className="flex items-center text-[18px] justify-between">
            <div className="flex gap-3">
              <p className="bg-white py-2 px-4 rounded-2xl">{filteredAuthorCourses.length} Products</p>
              <p className="bg-white py-2 px-4 rounded-2xl">7 Followers</p>
            </div>
            <div>
              <p className="bg-[#D4FB20] py-2 px-4 rounded-2xl">Follow</p>
            </div>
          </div>
        </div>
      </div>

      {/* authors courses */}
      <div className="w-[80%] flex justify-self-center items-center flex-wrap justify-around gap-1 py-10">
        {filteredAuthorCourses.map((course) => (
          <div
            key={course.id}
            className="shadow-md border border-gray-200 px-4 py-2 my-2 rounded-xl block w-fit"
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
      </div>
      <Footer />
    </div>
  );
}
