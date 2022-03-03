import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    const skills = {
        frontend: [
            {
                id: 1,
                icon: <BsPatchCheckFill />,
                title: 'HTML',
                subTitle: 'Experienced',
            },
            {
                id: 2,
                icon: <BsPatchCheckFill />,
                title: 'CSS',
                subTitle: 'Experienced',
            },
            {
                id: 3,
                icon: <BsPatchCheckFill />,
                title: 'Javascript',
                subTitle: 'Experienced',
            },
            {
                id: 4,
                icon: <BsPatchCheckFill />,
                title: 'Bootstrap',
                subTitle: 'Experienced',
            },
            {
                id: 5,
                icon: <BsPatchCheckFill />,
                title: 'React',
                subTitle: 'Experienced',
            },
        ],
        backend: [
            {
                id: 1,
                icon: <BsPatchCheckFill />,
                title: 'Node JS',
                subTitle: 'Intermediate',
            },
            {
                id: 2,
                icon: <BsPatchCheckFill />,
                title: 'PHP',
                subTitle: 'Basic',
            },
            {
                id: 3,
                icon: <BsPatchCheckFill />,
                title: 'Python',
                subTitle: 'Intermediate',
            },
            {
                id: 4,
                icon: <BsPatchCheckFill />,
                title: 'MongoDB',
                subTitle: 'Basic',
            },
            {
                id: 5,
                icon: <BsPatchCheckFill />,
                title: 'MySQL',
                subTitle: 'Intermediate',
            },
        ]
    }

    const { frontend, backend } = skills;
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontend.map((detail) => (
                            <article className='experience__details' key={detail.id}>
                                <div className='experience__details-icon'>{detail.icon}</div>
                                <div>
                                    <h4>{detail.title}</h4>
                                    <small className='text-light'>{detail.subTitle}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {backend.map((detail) => (
                            <article className='experience__details'>
                                <div className='experience__details-icon'>{detail.icon}</div>
                                <div>
                                    <h4>{detail.title}</h4>
                                    <small className='text-light'>{detail.subTitle}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience