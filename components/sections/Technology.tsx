'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface TechnologyItem {
  id: number;
  img: string;
}



const dataPartner = [
    { id: 1, img: '/assets/images/partner/01.png' }, 
    { id: 2, img: '/assets/images/partner/02.png' }, 
    { id: 3, img: '/assets/images/partner/03.png' }, 
    { id: 4, img: '/assets/images/partner/04.png' }, 
    { id: 5, img: '/assets/images/partner/05.png' }, 
    { id: 6, img: '/assets/images/partner/06.png' }, 
    { id: 7, img: '/assets/images/partner/07.png' }, 
    { id: 8, img: '/assets/images/partner/08.png' }, 
    { id: 9, img: '/assets/images/partner/09.png' }, 
    { id: 10, img: '/assets/images/partner/10.png' }, 
    { id: 11, img: '/assets/images/partner/11.png' }, 
    { id: 12, img: '/assets/images/partner/12.png' }, 
    { id: 13, img: '/assets/images/partner/13.png' }, 
    { id: 14, img: '/assets/images/partner/14.png' }, 
    { id: 15, img: '/assets/images/partner/15.png' }, 
    { id: 16, img: '/assets/images/partner/16.png' }
];

const Technology = () => {
  const [dataTitle] = useState({
    title: 'Our technology supports multiple platforms',
    text: 'Cras molestie ullamcorper augue nec pulvinar. Ut suscipit tempor justo, sed aliquet eros ultricies eu. Nam mollis sapien ut sapien gravida sollicitudin. Mauris vel nisl quis dolor accumsan luctus.'
  });

  return (
    <section className="tf-section technology">
      <div className="container w_1490">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="tf-title" data-aos="fade-right" data-aos-duration="800">
              <div className="img_technology">
                <img 
                  src="/assets/images/common/img_technology1.png" 
                  alt="Technology" 
                 
                />
                <img 
                  className="coin coin_1" 
                  src="/assets/images/common/coin1.png" 
                  alt="Coin 1" 
                 
                />
                <img 
                  className="coin coin_2" 
                  src="/assets/images/common/coin2.png" 
                  alt="Coin 2" 
                />
                <img 
                  className="coin coin_3" 
                  src="/assets/images/common/coin3.png" 
                  alt="Coin 3" 
                />
                <img 
                  className="coin coin_4" 
                  src="/assets/images/common/coin4.png" 
                  alt="Coin 4" 
                />
                <img 
                  className="coin coin_5" 
                  src="/assets/images/common/coin5.png" 
                  alt="Coin 5" 
                />
                <img 
                  className="coin coin_6" 
                  src="/assets/images/common/coin6.png" 
                  alt="Coin 6" 
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="content_technology" data-aos="fade-up" data-aos-duration="800">
              <div className="tf-title left">
                <h2 className="title mb20">
                  {dataTitle.title}
                </h2>
              </div>
              <p className="sub_technology">{dataTitle.text}</p>

              <Swiper
                className='slider-6'
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3}
              >
                {dataPartner.map(item => (
                  <SwiperSlide key={item.id}>
                    <Image 
                      src={item.img} 
                      alt={`Technology ${item.id}`} 
                      width={150} 
                      height={150} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className='slider-6'
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3}
              >
                {dataPartner.slice(2, 6).map(item => (
                  <SwiperSlide key={item.id}>
                    <Image 
                      src={item.img} 
                      alt={`Technology ${item.id}`} 
                      width={150} 
                      height={150} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;