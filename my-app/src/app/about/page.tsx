import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-10 bg-gradient-to-b from-blue-900 to-yellow sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Your project is our priority!
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <Image
                className="w-full mx-auto rounded-lg sm:max-w-xs"
                width={50}
                height={50}
                src="/photo1.jpg"
                alt="Olu Obafemi"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Hey! I am Olu, founder of BG Drew Builders.
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                A visionary Civil Engineer and proud graduate of the Federal
                University of Technology, Minna. With a passion for precision
                and a commitment to excellence, Olu stands at the forefront of
                transforming architectural dreams into tangible structures.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                At the core of Olu's philosophy is the belief that today's
                construction projects lay the groundwork for tomorrow's
                communities. Each endeavor is an opportunity to shape
                environments that stand the test of time, reflecting both
                technological advancements and timeless architectural
                principles.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">
                About Olu Obafemi - Building Tomorrow's Foundations Today{" "}
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Armed with a degree in Civil Engineering, Olu brings a wealth of
                knowledge and expertise to every project. His journey is defined
                by a relentless pursuit of innovation and a dedication to
                crafting structures that seamlessly blend functionality,
                aesthetics, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Meet the brains
            </h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Behind every successful project is a team of dedicated
              professionals, and Olu Obafemi is no exception. His team comprises
              skilled architects, engineers, and project managers who share
              Olu's passion for precision and commitment to client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Structural Engineer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Darrell Steward
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Painter
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Bessie Cooper
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Electrical Engineer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Arlene McCoy
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Building Engineer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Brooklyn Simmons
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Architect
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-6.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Jerome Bell
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Electrical Engineer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Dianne Russell
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Painter
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Kristin Watson
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Structural Engineer
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
              <Image
                width={100}
                height={100}
                className="object-cover mx-auto rounded-lg w-28 h-28"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg"
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                Eleanor Pena
              </p>
              <p className="mt-1 text-base leading-tight text-gray-600">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
