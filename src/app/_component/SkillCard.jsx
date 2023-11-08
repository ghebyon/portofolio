import Image from "next/image";

const SkillCard = ({src, skill, desc}) => {
  return (
    <div className=' flex flex-col items-center bg-white drop-shadow-sm px-4 py-8 text-center rounded-sm'>
      {src && <Image src={src} width={80} height={80} alt="" />}
      <p className=' text-lg font-semibold py-2 '>{skill}</p>
      <p className=' text-xs py-2 w-2/3'>{desc}</p>
    </div>
  )
}

export default SkillCard;