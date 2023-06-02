'use client'

import useAppInfo from '@/stores/app_store'
import React from 'react'

const NavbarSection = () => {
  const { isNavBarOpened, toggleNavBar } = useAppInfo()
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="z-10 absolute top-0 right-0 pt-3 pr-4">
        <label htmlFor="check" id="hamburger_wrapper">
          <input
            type="checkbox"
            id="check"
            checked={isNavBarOpened}
            onChange={() => {
              toggleNavBar()
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div
        className={[
          'z-[1] absolute bg-black',
          'h-1/2 w-full md:h-full md:w-1/2 md:bottom-auto',
          'skew-y-[15deg] md:skew-y-0 skew-x-0 md:skew-x-[15deg]',
          //   `${isOpen ? 'left-[50%]' : 'left-[100%]'}`,
          `${
            isNavBarOpened
              ? 'bottom-[50%] md:left-[50%]'
              : 'bottom-[100%] md:left-[100%]'
          }`,
        ].join(' ')}
        style={{
          transition: '0.4s ease-in-out',
          opacity: isNavBarOpened ? 0.7 : 0,
        }}
      ></div>
      <div
        className={[
          'z-[1] absolute bg-white',
          'h-1/2 w-full md:h-full md:w-1/2 md:top-auto',
          'skew-y-[15deg] md:skew-y-0 skew-x-0 md:skew-x-[15deg]',
          //   `${isOpen ? 'right-[50%]' : 'right-[100%]'}`,
          `${
            isNavBarOpened
              ? 'top-[50%] md:right-[50%]'
              : 'top-[100%] md:right-[100%]'
          }`,
        ].join(' ')}
        style={{
          transition: '0.4s ease-in-out',
          opacity: isNavBarOpened ? 0.7 : 0,
        }}
      ></div>
    </div>
  )
}

export default NavbarSection
