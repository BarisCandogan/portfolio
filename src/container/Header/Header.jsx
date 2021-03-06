import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constans'

import AppWrap from '../../wrapper/AppWrap'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <>
      <div className='app__header app__flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span style={{ padding: 20 }}>👋</span>
              <div style={{ marginleft: 20 }}>
                <p className='p-text'>Hello, I am </p>
                <h1 className='head-text'>Baris</h1>
              </div>
            </div>

            <div className='tag-cmp app__flex'>
              <p className='p-text'>Web Developer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__header-img'
        >
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            src={images.circle}
            className='overlay_circle'
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.redux, images.react, images.javascript].map(
            (circle, index) => (
              <div className='circle-cmp app__flex'>
                <img src={circle} alt='' />
              </div>
            )
          )}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Header, 'home')
