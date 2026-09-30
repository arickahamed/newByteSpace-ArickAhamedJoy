import Image from 'next/image'
import React from 'react'
import { courseData } from '../assets/courseData'

export default function HomePageCourse() {
  return (
    <div className="w-[70%] flex flex-col justify-self-center">
            <div className="w-full flex items-center justify-around gap-4 pb-15 flex-wrap">
              {courseData.slice(0, 6).map((course) => (
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
              ))}
            </div>
          </div>
  )
}
