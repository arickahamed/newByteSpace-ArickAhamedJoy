import Image from 'next/image'
import React from 'react'
import { reviewData } from '../assets/reviewData'

export default function Review() {
  return (
    <div className="w-full flex flex-col items-center justify-self-center relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#efffb0,transparent_30%),radial-gradient(circle_at_90%_50%,#e1e8ff,transparent_35%),#ffffff] py-20">
            <div className=" w-[80%] flex items-center justify-center gap-3 my-8">
              <p className="text-[44px] w-[40%]">
                Discover What Our <br /> Community Is Saying
              </p>
              <p className="w-[50%]">
                At ByteSpace, our vibrant community of learners and creators is at
                the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating on
                our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
            <div className="w-[80%] flex items-center justify-around justify-self-center gap-3">
              {reviewData.map((review) => (
                <div
                  key={review.name}
                  className="bg-gray-100 w-[25%] p-3 rounded-xl"
                >
                  <Image src={review.src} width={50} height={50} alt="sarah" />
                  <p className="text-[20px] font-semibold">{review.name}</p>
                  <p className="text-blue-400 text-[18px]">{review.title}</p>
                  <p className=" mt-2 text-[16px] text-slate-400">
                    {review.review}
                  </p>
                </div>
              ))}
              {/* <div className="border border-pink-600 w-[25%] p-3 rounded-xl">
                <Image 
                  src="/sarah.png"
                  width={50}
                  height={50}
                  alt="sarah"
                />
                <p className="text-[20px] font-semibold">sarah</p>
                <p className="text-blue-400 text-[18px]">title</p>
                <p className=" mt-2 text-[16px] text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque voluptas recusandae reprehenderit quasi tempora ullam fuga temporibus, modi debitis nemo ducimus rem totam eum quidem blanditiis! Quas reiciendis esse dicta sapiente eius provident dolor, pariatur aspernatur optio voluptatem ipsa ut nisi voluptatibus, minus aliquam commodi fugit, veniam repellat quidem!</p>
              </div> */}
            </div>
          </div>
  )
}
