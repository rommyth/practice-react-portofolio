import React from 'react'
import './about.css'
import aboutMe from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  const aboutCard = {
    card: [
      {
        id: 1,
        icon: <FaAward />,
        title: 'Experience',
        subTitle: '3+ Years Working'
      },
      {
        id: 2,
        icon: <FiUsers />,
        title: 'Clients',
        subTitle: '200+ Worldwide'
      },
      {
        id: 3,
        icon: <VscFolderLibrary />,
        title: 'Projects',
        subTitle: '80+ Completed'
      },
    ]
  }
  const { card } = aboutCard;

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {card.map((detail) => (
              <article className='about__card' key={detail.id}>
                <div className='about__icon'>{detail.icon} </div>
                <h5>{detail.title}</h5>
                <small>{detail.subTitle}</small>
              </article>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sunt magnam, consequuntur possimus placeat labore eligendi quo illum iusto accusantium, porro perspiciatis! Obcaecati nesciunt illum culpa ipsa praesentium, deleniti aliquid?
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About