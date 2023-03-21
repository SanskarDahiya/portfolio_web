import React from 'react'
import { Kaushan_Script } from 'next/font/google'
import Image from 'next/image'
const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] })

const HeaderSection = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center z-[1]">
      <div className="z-[1] overflow-hidden absolute inset-0">
        <Image
          src={'/sanskar_background.jpg'}
          alt="sanskar background"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="border border-blue-500 absolute inset-0 z-[1] bg-gradient-to-b from-[#FF9900] via-[#FF9900] to-orange-700 opacity-80" />
      <div className="z-[2] text-white">
        <h1
          className={
            kaushan.className +
            ' -rotate-6 font-medium text-2xl mb-20 md:text-5xl'
          }
        >
          ~ Sanskar Dahiya ~
        </h1>
        <div className="text-center text-md md:text-xl">
          Full Stack Developer
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default HeaderSection
