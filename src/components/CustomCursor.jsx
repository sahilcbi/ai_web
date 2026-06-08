// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)

    const addListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, select, textarea, [data-magnetic]')
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [isVisible, cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          backgroundColor: isHovering ? 'rgba(200, 169, 110, 1)' : 'transparent',
          border: isHovering ? '1px solid transparent' : '2px solid rgba(255, 255, 255, 0.8)'
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 400, damping: 25 }}
        className="rounded-full flex items-center justify-center"
      >
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono font-bold text-black uppercase tracking-widest"
          >
            Explore
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}