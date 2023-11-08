import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { RiGithubLine } from 'react-icons/ri'

const SocialMedia = () => {
  return (
    <a className='flex gap-3'>
      <a className=' bg-customBlue text-black p-1 rounded-full' href="https://www.instagram.com/ghebyon_tona/" target="_blank">
        <FaInstagram/>
      </a>
      <a className=' bg-customBlue text-black p-1 rounded-full' href='https://www.linkedin.com/in/ghebyonnainggolan/'  target="_blank">
        <FaLinkedinIn/>
      </a>
      <a className=' bg-customBlue text-black p-1 rounded-full' href="https://youtube.com/@Ghebyon?si=NM1kh75Nv_8wK9jm" target="_blank">
        <FaYoutube/>
      </a>
      <a className=' bg-customBlue text-black p-1 rounded-full' href="https://github.com/HaseaGhebyon/HaseaGhebyon" target="_blank">
        <RiGithubLine/>
      </a>
    </a>
  )
}

export default SocialMedia;