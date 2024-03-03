'use client'

import CaretTop from '@/components/Icons/CaretTop';

const ScrollToTop = () => {
  return (
    <button
      onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
      className={'fixed bottom-12 right-12 p-2 bg-white rounded-full shadow-lg'}
    >
      <CaretTop/>
    </button>
  )
}

export default ScrollToTop;
