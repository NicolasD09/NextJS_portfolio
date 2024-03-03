'use client'
import { motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import css from './Navbar.module.scss'

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress.get())
  }, [scrollYProgress])

  return (
    <motion.div style={{ scaleX: scrollYProgress }} className={css.progress}/>
  )
}

export default ScrollIndicator;
