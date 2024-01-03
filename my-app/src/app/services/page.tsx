import Vid2 from "@/components/vid2";
import React from "react";
import { FaHome, FaTools, FaIndustry, FaBuilding } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineSupervisorAccount } from "react-icons/md";

export default function services() {
  return (
    <div>
      <Vid2 />
      <div className="pt-20 pb-8 md:pt-16 md:pb-0 h-fit">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <p className="text-white leading-relaxed font-light text-xl mx-auto mt-10 pb-2">
              Are you ready to build your dreams? Look no further! At B.G Drew,
              we bring your architectural visions to life with precision,
              passion, and professionalism.
            </p>
          </header>
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="py-4 px-4 mb-12 bg-gray-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-flex text-green items-center justify-center text-3xl mb-2">
                  <FaHome />{" "}
                  <h3 className=" text-lg leading-normal px-2 pt-2 font-semibold text-black">
                    Residential Construction
                  </h3>
                </div>

                <h3 className="text-blue-900 italic my-2">
                  Transforming Dreams into Homes
                </h3>
                <p className="text-gray-500">
                  Elevate your living experience with our expert residential
                  construction services. From bespoke designs to meticulous
                  execution, we bring your vision to life, creating homes that
                  resonate with your lifestyle and aspirations.
                </p>
              </div>
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="py-4 px-4 mb-12 bg-gray-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-flex text-green items-center justify-center text-3xl mb-2">
                  <FaTools />
                  <h3 className=" text-lg leading-normal px-2 pt-2 font-semibold text-black">
                    Renovation & Remodeling
                  </h3>
                </div>

                <h3 className="text-blue-900 italic my-2">
                  Revitalize Your Space
                </h3>
                <p className="text-gray-500">
                  Whether it's a home or a business, our renovation and
                  remodeling services breathe new life into existing structures.
                  From aesthetic enhancements to structural improvements, we
                  transform spaces, enhancing functionality and aesthetics.
                </p>
              </div>
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div className="py-4 px-4 mb-12 bg-gray-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-flex text-green items-center justify-center text-3xl mb-2">
                  <FaIndustry />
                  <h3 className=" text-lg leading-normal px-2 pt-2 font-semibold text-black">
                    Industrial Solutions
                  </h3>
                </div>

                <h3 className="text-blue-900 italic my-2">
                  Innovation in Every Blueprint
                </h3>
                <p className="text-gray-500">
                  Specializing in industrial construction, we deliver
                  cutting-edge facilities tailored to meet the demands of modern
                  industries. Our solutions focus on efficiency, functionality,
                  and sustainability, ensuring your industrial space stands the
                  test of time.
                </p>
              </div>
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="py-4 px-4 mb-12 bg-gray-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-flex text-green items-center justify-center text-3xl mb-2">
                  <TbBuildingSkyscraper />
                  <h3 className=" text-lg leading-normal px-2 pt-2 font-semibold text-black">
                    Commercial Structures
                  </h3>
                </div>

                <h3 className="text-blue-900 italic my-2">
                  Crafting Spaces for Success
                </h3>
                <p className="text-gray-500">
                  Our commercial construction expertise goes beyond bricks and
                  mortar. We design and build dynamic commercial spaces that
                  inspire productivity and leave a lasting impression. Trust us
                  to create environments that foster growth and success.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div className="py-4 px-4 mb-12 bg-gray-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-flex text-green items-center justify-center text-3xl mb-2">
                  <FaBuilding />
                  <h3 className=" text-lg leading-normal px-2 pt-2 font-semibold text-black">
                    Green Building Solutions
                  </h3>
                </div>

                <h3 className="text-blue-900 italic my-2">
                  Sustainability Beyond Structures
                </h3>
                <p className="text-gray-500">
                  Embrace eco-friendly construction with our green building
                  solutions. We integrate sustainable practices,
                  energy-efficient designs, and environmentally conscious
                  materials to create structures that not only stand out but
                  also contribute to a greener and sustainable future.
                </p>
              </div>
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="py-4 px-4 mb-12 bg-gray-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-flex text-green items-center justify-center text-3xl mb-2">
                  <MdOutlineSupervisorAccount />
                  <h3 className=" text-lg leading-normal px-2 pt-2 font-semibold text-black">
                    Project Management
                  </h3>
                </div>

                <h3 className="text-blue-900 italic my-2">
                  Your Vision, Our Expertise
                </h3>
                <p className="text-gray-500">
                  Enlist our comprehensive project management services for a
                  seamless construction journey. From initial planning to final
                  execution, we oversee every detail, ensuring timelines are
                  met, budgets are maintained, and quality is never compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
