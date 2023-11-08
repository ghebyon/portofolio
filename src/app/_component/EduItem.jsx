'use client'
import { Button } from "flowbite-react";

const EduItem = ({institute, status, role, desc, link}) => {
  return (
    <div className={` flex gap-4 p-4 ${link === undefined ? '  ' : ' justify-between '}`}>
      <div className={`${link !== undefined ? ' ' : 'w-1/3'}`}>
        <p className=' font-semibold text-base'>{institute}</p>
        <p className={` ${status === 'On going' ?  'text-green-400 ' : ' '} pt-2`}>{status}</p>
      </div>
      <div className={`${link !== undefined ? ' ' : 'w-2/3'}`}>
        <p className=' font-semibold text-base'>{role}</p>
        <p className='text-sm pt-2'>{desc}</p>
        { link && <Button gradientMonochrome='cyan' disabled={true}>See Certificate</Button>}
      </div>
    </div>
  )
}

export default EduItem;