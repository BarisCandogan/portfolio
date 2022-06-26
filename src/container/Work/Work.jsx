import React from 'react'
import './Work.scss'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constans'
import { useState } from 'react'

const Work = () => {
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
    {
      title: 'Quiz App',
      imgUrl: images.quiz,
      url: 'https://inspiring-flan-66d1d0.netlify.app',
      github: 'https://github.com/BarisCandogan/quizApp',
    },
    {
      title: 'Snake App',
      imgUrl: images.snake,
      url: 'https://warm-belekoy-d16765.netlify.app/',
      github: 'https://github.com/BarisCandogan/snake-game',
    },
  ]

  return (
    <div>
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
                <br />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                >
                  Project site
                </motion.div>
              </a>
            </div>
            <a
              style={{
                color: 'black',
                fontStyle: 'oblique',
              }}
              href={work.github}
            >
              <AiFillGithub />
              <br />
              Source Code
            </a>

            <div className='text'>{work.title}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Work, 'projects')
