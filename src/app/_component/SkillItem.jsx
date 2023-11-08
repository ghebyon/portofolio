'use client'
import { Progress } from "flowbite-react"
import { Flowbite } from 'flowbite-react';
import { GiMaterialsScience } from 'react-icons/gi'

const customTheme = {
  button: {
    color: {
      primary: 'bg-blue',
    },
  },
};

const SkillItem = ({type, skill, rate}) => {
  
  switch (type) {
    case 'basic':
      return (
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between text-xs'>
            <p>{skill}</p>
            <p>{rate}%</p>
          </div>
          <Flowbite theme={{theme: customTheme}}>
            <Progress className=" bg-gray-200 text-cyan-300" progress={rate} size="sm" />  
          </Flowbite>
        </div>
      )
    case 'extra':
    default:
      return (
        <div className="flex justify-start gap-2 text-xs items-center">
          <GiMaterialsScience className=" text-customBlue"/>
          <p>{skill}</p>
        </div>
      )
  }
}

export default SkillItem;