'use client'
const { Button } = require("flowbite-react")

const HireButton = () => {
  return (
    <a href='https://www.linkedin.com/in/ghebyonnainggolan/'  target="_blank">
      <Button  gradientMonochrome='cyan' >
        {`Hire Me ->`}
      </Button>
    </a >
  )
}

export default HireButton;