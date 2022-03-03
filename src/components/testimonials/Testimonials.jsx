import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const Testimonials = () => {
    const data = [
        {
            avatar: "https://i.pravatar.cc/80",
            name: 'R Magnusen',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio quibusdam totam soluta ea numquam ab nisi debitis nesciunt et.'
        },
        {
            avatar: "https://i.pravatar.cc/80",
            name: 'Tiyrany Omega',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem neque optio error minus maiores iure.'
        },
        {
            avatar: "https://i.pravatar.cc/80",
            name: 'Rommy Sapalas',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, laborum vel necessitatibus cum soluta qui autem porro.'
        },
    ]

    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container mySwiper"
                pagination={{
                    dynamicBullets: true
                }}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}

            >
                {
                    data.map((detail, idx) => (
                        <SwiperSlide className="testimonial" key={idx}>
                            <div className="client__avatar">
                                <img src="https://i.pravatar.cc/80" alt={detail.name} />
                            </div>
                            <h5 className='client__name'>{detail.name}</h5>
                            <small className='client__review'>{detail.review}</small>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

export default Testimonials