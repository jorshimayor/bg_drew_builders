import Vid from "@/components/vid";
import Anime from "../animation/anime";
import { GiHammerNails, GiNails, GiHouse, GiFamilyHouse } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <Vid />
      <div className="z-10 bg-transparent flex flex-col items-center mt-[100px] justify-center gap-5 text-white">
        <h1 className="drew font-extrabold text-4xl md:text-7xl text-center max-sm:mx-4 mx-4">
          B.G DREW BUILDERS
        </h1>
        <h3 className="text-xl md:text-3xl text-center">
          Your Trusted Partner in Construction Excellence!
        </h3>
        <div className="flex gap-5 text-green border-t-4 border-b-4 py-2 border-dotted border-green">
          <GiHammerNails />
          <GiNails />
          <GiHouse />
          <IoConstructOutline />
          <GiFamilyHouse />
        </div>
        <h3 className="text-xl md:text-3xl flex text-center">
          Crafting Excellence, One Brick at a Time
        </h3>
        <h3 className="text-center md:text-xl">
          Whether it's residential, commercial, or industrial, our skilled
          craftsmen meticulously construct each project, ensuring durability and
          aesthetic brilliance.
        </h3>
        <span className="text-center md:text-xl">
          Your satisfaction is our cornerstone.
        </span>

        <div className="w-[250px] h-[200px]">
          <Anime />
        </div>
      </div>
    </div>
  );
}
