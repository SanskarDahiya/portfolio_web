import React from 'react'
import { Kaushan_Script } from 'next/font/google'
import Image from 'next/image'
import TypewriterEffect from './TypewriterEffect'
const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] })

const HeaderSection = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center z-[1]">
      <div className="z-[1] overflow-hidden absolute inset-0">
        <Image
          src={'/sanskar_background.jpg'}
          alt="sanskar background"
          className="object-cover	object-center	bg-gradient-to-b from-[#FF9900] via-[#FF9900] to-orange-700"
          quality={100}
          loading={'eager'}
          fill
          priority
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAAAXNSR0IArs4c6QAABHNJREFUSEtVlanPLFUUxOv2vs7MI0GgEKgncAQ0ChQS8zQJAgcKQzAYEnAEAw4kCQYkCgj/AQKP4pvpvfsufUmd7v4WMZmtp+/vVNWpUX8t3lsHGA0sC2AM4BygFBCGQBwBUQQECvArv/eY5wnzNGKZJ1irofyKKAqRpQmKPJMHX0e8AQBnDfSi5fp5nqGXBcZoOLdC/d557yygDaAFwGNdrfwwigLEUbgBBDuAXjDPowAQxJLcr4ijAFmaPgJI5beKAM5C6wXLPG8PATBYnYP67V/vObE2Ti6SL1YnE0dhgDiOZLoNwMHsANM4CIjVGwBhD4CyyJFlKZIoEiV5kNFaJheA4xwC/Pp36y0vMFouMtbIQUGg5OAkjhDHBFCijFkWzNOAcRwwTYMA8fo4DJFltCAHAWhDEscIg2ADN0YG1PMiANYYOAL89Oc/ni8EwBhYAvhVDuT0aRLfA/BGepkxjT2GoQdVWJYJlJBq0feyKFCVBYoiR5owB5TOy305IOWnEnwvGfjhlz8EgF4KAAMBjzAMZPo0jeX5UEDPM8axR9+1AsFgrc7IpAdAXRUCkmcpojCCgpdpxQaqQABj4VYH9d2PP28A1uyyPAQwSWK5KZ/DQEmYlmXE0Hfo2hZ932IeB0k5AXltVRSoqxJVWSIXGwigthyYLQda6wcLvvn2e08p7gFIpbh+IdI0eQKwOivB4/Rte0PXNhiHXtRjaCk55a/rCnVZoSy2HATqAOA67hnQZlPgqy+/9qQTAGtlAwQgjuRwppkgmwJG1o8HN7cr2uYmajCI/E2WxCjLAqe6xqkiQI4kSR4BaNBCyQEBnIX64rPPdwusQKwrAwgh5+F5vgFEuwUTAZobbrc7NNer2MBg0udDAQGoCVDIZ4cCRxdIGWkNZy3Upx9/4tfDAmvvV5C+51mGvDhaLQAtIAAnv17/w40AXSNTMbjcmLoscTrVONf1IwC2IfPDFZ4wTdO+CRbqow8+9JSdqbSOHUAFArkZDz9KhbXKHqAFAnBHgDt0XQs9T7JqEsKywPl0wvlUSyCpAO3h/dmc0zhiHFnjs1iuXrz/wjMMfENKAQiVyF6yVMpC0swyYg8IQNvgdgC0Ty3gBlzOB0ApG8Q65gpy+mEY5MHXXHv17jvv3WdAAPwqHSAALJVqKxWuEyuXU/Rtg+uVGdgVWBYEoAKpeL8BnESNJE5EHQaVk/ddh6HvxQYBeOOtt/ctYAg3gOOfrSxL1HW5exkDWCVwXEP6z01gCFnPXEMWDwN4OZ8Fgl3AMBOcFczJaRkhxmGENhrqtedvPijgDgVCuVlVEaCSSegvvTQE6LuHNey2NWQRFVkm3j+7EOC8KxDDr1485+S0jyU2EEBrqJdfff3JFlAuUSBLpdGYaIIQgFOyzbj7DOLRAyyiUCn5IyLAS5cLLhcCUIFIckUATt40rfTI0A8bwOmV508soMxhGErwDgA+UxFOKV4O/T2ANKHWkhv+A15OJzzbAbiStIDdskzTDtCgbRqxgwD/A0JF0wOWO31aAAAAAElFTkSuQmCC"
          placeholder="blur"
        />
      </div>
      <div className="opacity-70 absolute inset-0 z-[1] bg-gradient-to-b from-[#FF9900] via-[#FF9900] to-orange-700" />
      <div className="z-[2] text-white pt-36">
        <h1
          className={
            kaushan.className +
            ' -rotate-6 font-medium text-4xl mb-14 md:text-5xl'
          }
        >
          ~ Sanskar Dahiya ~
        </h1>
        <div className="text-center mt-4 text-xl">I'm Full Stack Developer</div>
        <div className="text-center text-lg">
          I can solve
          <span className="line-through px-1">
            <TypewriterEffect text=" all some one of " upto={5} />
          </span>
          your problems, ok?
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
