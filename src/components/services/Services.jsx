import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  const servicesData = {
    uiDesign: [
      {
        id: 1,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 2,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 3,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 4,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 5,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 6,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
    ],
    webDev: [
      {
        id: 1,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 2,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 3,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 4,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 5,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 6,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
    ],
    contCreation: [
      {
        id: 1,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 2,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 3,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 4,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
      {
        id: 5,
        icon: <BiCheck />,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
      },
    ]
  }

  const { uiDesign, webDev, contCreation } = servicesData;
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            {uiDesign.map(detail => (
              <li key={detail.id}>
                <div className="service__list-icon">
                  {detail.icon}
                </div>
                <p>{detail.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            {webDev.map(detail => (
              <li>
                <div className="service__list-icon">
                  {detail.icon}
                </div>
                <p>{detail.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className='service__list'>
            {contCreation.map(detail => (
              <li>
                <div className="service__list-icon">
                  {detail.icon}
                </div>
                <p>{detail.text}</p>
              </li>
            ))}
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services