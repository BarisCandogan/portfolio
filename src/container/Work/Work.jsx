import React from 'react'
import './Work.scss'
import { AiFillGithub } from 'react-icons/ai'
import { animate, motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constans'
import { useState } from 'react'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const works = [
    {
      title: 'Instagram Project',
      imgUrl: images.instagram,
      url: 'https://instagram-clone-react-f9735.web.app',
      github: 'https://github.com/BarisCandogan/instagram-project',
    },
    {
      title: 'Netflix Project',
      imgUrl: images.netflix,
      url: 'https://netflix-project-ab9fc.web.app',
      github: 'https://github.com/BarisCandogan/netflix-project',
    },
    {
      title: 'Gmail Project',
      imgUrl: images.gmail,
      url: 'https://project-a1436.web.app',
      github: 'https://github.com/BarisCandogan/gmail-project',
    },
  ]

  const handleWorkFilter = (item) => {}

  return (
    <>
      <h2 className='head-text'>
        My <span>Projects</span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {works.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div>
              <a href={work.url}>
                <img src={work.imgUrl} alt={work.name} />
              </a>
              <a href={work.url}>
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                >
                  <a style={{ color: 'white' }} href={work.github}>
                    <AiFillGithub />
                  </a>
                </motion.div>
              </a>
            </div>

            <div className='text'>{work.title}</div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')
