import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { images } from '../../constans'
import { AppWrap } from '../../wrapper'

const About = () => {
  const abouts = [
    {
      title: 'React.Js',
      imgUrl: images.react,
    },
    {
      title: 'Javascript',
      imgUrl: images.javascript,
    },

    {
      title: 'Redux',
      imgUrl: images.redux,
    },
    {
      title: 'Firebase',
      imgUrl: images.firebase,
    },
    {
      title: 'Css',
      imgUrl: images.css,
    },
    {
      title: 'Sass',
      imgUrl: images.sass,
    },
    {
      title: 'Html',
      imgUrl: images.html,
    },
  ]

  return (
    <>
      <h2 className='head-text'>
        My <span>Skills</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bolf-text' style={{ textAlign: 'center' }}>
              {about.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'skills')
