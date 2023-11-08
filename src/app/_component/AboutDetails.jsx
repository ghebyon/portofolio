const AboutDetails = ({keyText, value, valueStyle}) => {
  return (
    <div className='flex justify-between w-full items-center text-xs font-medium'>
      <p className=' bg-customBlue  px-2 py-[0.5px]  text-left'>{keyText}:</p>
      <p className={` text-right ${valueStyle}`}>{value}</p>
    </div>
  )
}

export default AboutDetails;