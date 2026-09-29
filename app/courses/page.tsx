"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("about");
  console.log(activeTab);
  return (
    <div className="w-full m-0 p-0 box-border">
      <div
        className="h-full bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
      >
        <Navbar />
        {/* hero section */}
        <div className="w-[90%] pl-5 mt-10 justify-self-center">
          <div className="w-full text-slate-200 justify-self-center flex justify-between items-center">
            <p className="text-[40px]">
              Build Digital Asset: A Comprehensive Guide
            </p>
            <p className="text-[16px] bg-[#D4FB20] rounded-xl py-1 px-2 text-black justify-self-end ">
              Share
            </p>
          </div>
          <p className="text-[18px] font-bold text-slate-300">
            Unlock the Power of Digital Creation with Expert Guidance
          </p>
          <p className="text-slate-200 py-5">by purepear studio</p>
          <Image
            className="pb-3"
            src="/course-hero-data-img.png"
            width={500}
            height={200}
            alt="insight"
          />
          <div className="relative">
            <Image
              className="pb-3"
              src="/course-hero-video.png"
              width={500}
              height={200}
              alt="insight"
            />
            <Image
              className="absolute top-[20%] right-[20%]"
              src="/course-hero-rightside-enroll-now.png"
              width={280}
              height={200}
              alt="insight"
            />
          </div>
        </div>
      </div>
      {/*------ about lesson review----------- */}
      <div className="w-[50%] ml-15 mt-15 mb-15">
        {/* ----------------buttons---------- */}
        {/* <div className="flex w-[30%] justify-between items-center py-1 px-2 ">
          <p className=" px-2 py-1 rounded bg-[#D4FB20]">About</p>
          <p className="px-2 py-1 rounded bg-[#F5F5F6]">Lesson</p>
          <p className=" px-2 py-1 rounded bg-[#F5F5F6]">Review</p>
        </div> */}
        <div className="flex w-full max-w-[400px] items-center gap-2 rounded-lg bg-[#F5F5F6] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("about")}
            className={`rounded px-4 py-2 text-sm transition ${
              activeTab === "about"
                ? "bg-[#D4FB20] text-black"
                : "bg-transparent text-slate-600"
            }`}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("lesson")}
            className={`rounded px-4 py-2 text-sm transition ${
              activeTab === "lesson"
                ? "bg-[#D4FB20] text-black"
                : "bg-transparent text-slate-600"
            }`}
          >
            Lesson
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("review")}
            className={`rounded px-4 py-2 text-sm transition ${
              activeTab === "review"
                ? "bg-[#D4FB20] text-black"
                : "bg-transparent text-slate-600"
            }`}
          >
            Review
          </button>
        </div>

        {/* --------for about---------- */}
        {activeTab === "about" && (
          <div className="pl-2 mt-8">
            <p className="text-[18px] font-bold py-5">Description</p>
            <p className="text-[15px] text-slate-500">
              Embark on an enlightening exploration into the world of digital
              creation with our comprehensive course, "Build Digital Assets: A
              Comprehensive Guide." This transformative learning experience
              invites you to delve deep into the intricacies of crafting
              impactful digital content. From laying the groundwork with
              foundational concepts to mastering advanced techniques, this guide
              is meticulously curated to empower you with the skills essential
              for navigating the dynamic landscape of digital asset creation.
            </p>
            <p className="pt-2 text-[15px] text-slate-500">
              In the initial modules, you'll establish a solid foundation by
              immersing yourself in the foundational concepts that form the
              backbone of digital asset creation. Understand the fundamental
              elements that constitute compelling digital content and gain
              proficiency in leveraging these elements to communicate
              effectively in the digital realm.
            </p>
            <p className="pt-2 text-[15px] text-slate-500">
              As you progress through the course, you'll ascend to higher levels
              of expertise, delving into the nuances of design principles that
              drive impactful creations. Uncover the secrets behind effective
              visual communication, exploring color theory, typography, and
              layout strategies that elevate your digital assets to new heights.
              Engage in hands-on exercises that reinforce your understanding,
              allowing you to apply these principles in practical scenarios.
            </p>

            {/* sneak peak */}
            <div>
              <p className="text-[18px] font-bold py-5">Sneak Peak</p>
              <Image
                className="pb-3"
                src="/course-sneakpeak.png"
                width={700}
                height={200}
                alt="insight"
              />
            </div>

            {/* keypoint */}
            <div className="mt-5">
              <p className="text-[18px] font-bold">Key Point</p>
              <div className="py-3">
                <div className="flex items-center">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Foundational Concepts</p>
                </div>
                <div className="flex items-center pt-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Design Principles Mastery</p>
                </div>
                <div className="flex items-center pt-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Advanced Techniques in Digital Creation</p>
                </div>
                <div className="flex items-center pt-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Project Showcase and Critique</p>
                </div>
                <div className="flex items-center pt-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Optimizing for Various Platforms</p>
                </div>
                <div className="flex items-center pt-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Digital Asset Management Best Practices</p>
                </div>
                <div className="flex items-center pt-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Monetization Strategies</p>
                </div>
                <div className="flex items-center pt-2 pb-7">
                  <i className="fa-solid fa-circle-check"></i>
                  <p>Capstone Project: Building Your Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------for lesson------ */}
        {activeTab === "lesson" && (
          <div className="pl-2 mt-8">
            <p className="text-[18px] font-bold">Explore the Modules</p>
            <p className="text-[15px] text-slate-500 py-5">
              Immerse yourself in the course content as we break down each
              module into comprehensive lessons, providing practical insights
              and hands-on experiences.
            </p>
            <p className="pt-5 pb-2 text-[18px] font-bold">Lesson List</p>
            <div className="flex items-center justify-between mt-3">
              <div className="bg-[#D4FB20]">
                <i className="fa-solid fa-video text-4xl"></i>
              </div>
              <div className="w-[88%]">
                <p className="text-[14px] font-bold">
                  Module 1: Introduction to Digital Assets
                </p>
                <p className="text-[12px] text-slate-500">
                  Lay the groundwork with lessons like 'Understanding Digital
                  Elements' and 'Navigating Design Software Tools.' Dive into
                  the essentials of digital asset creation.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="bg-[#D4FB20] rounded">
                <i className="fa-solid fa-video text-4xl"></i>
              </div>
              <div className="w-[88%]">
                <p className="text-[14px] font-bold">
                  Module 2: Design Principles for Impact
                </p>
                <p className="text-[12px] text-slate-500">
                  Master the principles that drive impactful designs with
                  lessons such as 'Color Theory in Digital Design' and
                  'Typography Essentials.' Elevate your visual communication
                  skills.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="bg-[#D4FB20]">
                <i className="fa-solid fa-video text-4xl"></i>
              </div>
              <div className="w-[88%]">
                <p className="text-[14px] font-bold">
                  Module 4: User-Centric Design Strategies
                </p>
                <p className="text-[12px] text-slate-500">
                  Understand 'Design Thinking in Digital Creation' and delve
                  into 'User Experience (UX) Essentials.' Craft digital assets
                  with a focus on user-centric design.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="bg-[#D4FB20] rounded">
                <i className="fa-solid fa-video text-4xl"></i>
              </div>
              <div className="w-[88%]">
                <p className="text-[14px] font-bold">
                  Module 5: Interactive Media and Engagement
                </p>
                <p className="text-[12px] text-slate-500">
                  Engage your audience with lessons like 'Creating Interactive
                  Presentations' and 'Integrating Multimedia Elements.' Master
                  the art of creating immersive digital experiences.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="bg-[#D4FB20] rounded">
                <i className="fa-solid fa-video text-4xl"></i>
              </div>
              <div className="w-[88%]">
                <p className="text-[14px] font-bold">
                  Module 6: Project Showcase and Critique
                </p>
                <p className="text-[12px] text-slate-500">
                  Perfect your presentation skills with 'Effective Presentation
                  Techniques' and embrace collaboration with 'Peer Critique and
                  Collaboration.' Showcase your work with confidence.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="bg-[#D4FB20] rounded">
                <i className="fa-solid fa-video text-4xl"></i>
              </div>
              <div className="w-[88%]">
                <p className="text-[14px] font-bold">
                  Module 7: Optimizing Digital Assets for Various Platforms
                </p>
                <p className="text-[12px] text-slate-500">
                  Adapt your digital creations for 'Mobile Platforms' and
                  optimize for 'Social Media.' Ensure widespread accessibility
                  and engagement across diverse digital landscapes.
                </p>
              </div>
            </div>
            <div className="my-3">
              <p className="my-2 text-[18px] font-bold">Lesson Content</p>
              <p className="text-slate-500 text-[14px] mb-3">
                Engage with each lesson through captivating video content,
                detailed textual explanations, and interactive elements.
                Download resources, complete assignments, and test your
                understanding with quizzes.
              </p>
            </div>
            <div className="my-3">
              <p className="my-2 text-[18px] font-bold">
                Lesson Progress Tracking
              </p>
              <p className="text-slate-500 text-[14px] mb-3">
                Engage with each lesson through captivating video content,
                detailed textual explanations, and interactive elements.
                Download resources, complete assignments, and test your
                understanding with quizzes.
              </p>
            </div>
            <Image
              className="mt-5"
              src="/course-learning-progress.png"
              width={500}
              height={200}
              alt="learning progress"
            />
          </div>
        )}

        {/* ------------for review----------- */}
        {activeTab === "review" && (
          <div className="pl-2 mt-8">
            <p className="mt-8 text-[18px] font-bold">
              What Learners Are Saying
            </p>
            <p className="text-[14px] text-slate-500 my-3">
              Discover what our learners have to say about their experience with
              'Build Digital Assets: A Comprehensive Guide.' Read reviews and
              ratings from individuals who have embarked on the transformative
              journey of mastering digital asset creation.
            </p>
            <Image
              className="mt-6"
              src="/course-review.png"
              width={700}
              height={200}
              alt="review"
            />

            <p className="text-[18px] font-bold mt-5">Individual Reviews:</p>
            <Image
              className="mt-3 mb-5"
              src="/course-all-rating.png"
              width={500}
              height={200}
              alt="review"
            />

            <Image
              className="my-3"
              src="/course-review1.png"
              width={700}
              height={200}
              alt="review"
            />
            <Image
              className="my-3"
              src="/course-review-2.png"
              width={700}
              height={200}
              alt="review"
            />
            <Image
              className="my-3"
              src="/course-review3.png"
              width={700}
              height={200}
              alt="review"
            />
            <Image
              className="mt-3 mb-6"
              src="/course-review4.png"
              width={700}
              height={200}
              alt="review"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
