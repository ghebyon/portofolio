import Image from "next/image";
import { RiHome2Fill, RiBriefcase4Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiCurledLeaf } from "react-icons/gi";
import { BiSolidComment } from "react-icons/bi";

const Navigation = () => {
  return (
    <div className='navigation sticky top-0 flex-none bg-white h-screen w-[5%] flex flex-col shadow-md justify-center items-center gap-8 text-3xl text-zinc-600'>
      <RiHome2Fill className=" bg-stone-50 p-1 rounded-full"/>
      <FaFileCode className=" bg-stone-50 p-1 rounded-full" />
      <PiStudentFill className=" bg-stone-50 p-1 rounded-full" />
      <RiBriefcase4Fill className=" bg-stone-50 p-1 rounded-full" />
      <GiCurledLeaf className=" bg-stone-50 p-1 rounded-full" />
      <BiSolidComment className=" bg-stone-50 p-1 rounded-full" />
    </div>
  )
}

export default Navigation;