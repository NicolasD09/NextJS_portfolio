'use client'
import { motion, useScroll } from 'framer-motion';
import css from './Navbar.module.scss'

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    scrollYProgress.get() > 0 &&
    <motion.div style={{ scaleX: scrollYProgress }} className={css.progress}/>
  )
}

export default ScrollIndicator;
