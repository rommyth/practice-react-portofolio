import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portofolio-1.png'
import IMG2 from '../../assets/portofolio-2.png'
import IMG3 from '../../assets/portofolio-3.png'
import IMG4 from '../../assets/portofolio-4.png'
import IMG5 from '../../assets/portofolio-5.png'
import IMG6 from '../../assets/portofolio-6.png'

const Portofolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'This is Title',
      github: 'https://github.com/webicat',
      dibbble: 'https://dribbble.com/kharommy',
    },
    {
      id: 2,
      image: IMG2,
      title: 'This is Title',
      github: 'https://github.com/webicat',
      dibbble: 'https://dribbble.com/kharommy',
    },
    {
      id: 3,
      image: IMG3,
      title: 'This is Title',
      github: 'https://github.com/webicat',
      dibbble: 'https://dribbble.com/kharommy',
    },
    {
      id: 4,
      image: IMG4,
      title: 'This is Title',
      github: 'https://github.com/webicat',
      dibbble: 'https://dribbble.com/kharommy',
    },
    {
      id: 5,
      image: IMG5,
      title: 'This is Title',
      github: 'https://github.com/webicat',
      dibbble: 'https://dribbble.com/kharommy',
    },
    {
      id: 6,
      image: IMG6,
      title: 'This is Title',
      github: 'https://github.com/webicat',
      dibbble: 'https://dribbble.com/kharommy',
    },


  ];

  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map((detail) => (
            <article className="portofolio__item" key={detail.id}>
              <div className="portofolio__item-image">
                <img src={detail.image} alt={detail.title} />
              </div>
              <h3>{detail.title}</h3>
              <div className="portofolio__item-cta">
                <a href={detail.github} className='btn'>Github</a>
                <a href={detail.dibbble} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portofolio