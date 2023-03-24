'use client'
import { wait } from '@/Helper/timer'
import { getUniqueId } from '@/Helper/uuid'
import React, { useEffect, useRef } from 'react'

const TypewriterEffect = ({ text, upto }: { text: string; upto?: number }) => {
  const textElementRef = useRef<HTMLSpanElement>(null)
  upto = upto || 0

  useEffect(() => {
    const textElement = textElementRef.current
    if (!textElement) return
    const currentEffectId = getUniqueId()

    textElement.setAttribute('x-attr-unique', currentEffectId)
    const currText = textElement.getAttribute('x-attr-text') || text
    textElement.setAttribute('x-attr-text', currText)
    textElement.innerHTML = currText

    const startEffect = async () => {
      let dir: 'dec' | 'inc' = 'dec'
      let text = currText
      while (true) {
        const thisUniqueId = textElement.getAttribute('x-attr-unique')
        const thisTextElement = textElementRef.current
        if (thisUniqueId !== currentEffectId || !thisTextElement) {
          break
        }
        let delta = 150 - Math.random() * 100 // random curson timer
        if (dir === 'dec') {
          const length = text.length
          text = currText.substring(0, length - 1)
          if (text.length === upto) {
            dir = 'inc'
            delta = 800
          }
        } else {
          const length = text.length
          text = currText.substring(0, length + 1)
          if (text.length === currText.length) {
            dir = 'dec'
            delta = 2500
          }
        }
        thisTextElement.innerHTML = text
        // console.log('>>>>', text)
        await wait(delta)
      }
    }
    startEffect()
  }, [text])

  return (
    <>
      <span
        className="typewriterEffect"
        ref={textElementRef}
        x-attr-text={text}
      >
        {text}
      </span>
    </>
  )
}

export default TypewriterEffect
