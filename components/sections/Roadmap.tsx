'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"

interface RoadmapItem {
  id: number;
  time: string;
  text1: string;
  text2: string;
  text3: string;
  status: string;
}

const Roadmap = () => {
  
  const dataRoadmap: RoadmapItem[] = [
    {
      id: 1,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: 'active'
    },
    {
      id: 2,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: 'active'
    },
    {
      id: 3,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: 'active'
    },
    {
      id: 4,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: 'active'
    },
    {
      id: 5,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: ''
    },
    {
      id: 6,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: ''
    },
    {
      id: 7,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: ''
    },
    {
      id: 8,
      time: 'April 16, 2022',
      text1: 'Cras molestie ullamcorper augue nec pulvinar',
      text2: 'Nam mollis sapien ut sapien gravida sollicitudin',
      text3: 'Mauris vel nisl quis dolor accumsan luctus',
      status: ''
    },
  ];

  return (
    <section className="tf-section roadmap">
      <div className="container w_1850">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
              <h2 className="title">
                Roadmap
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="container_inner roadmap_boder">
              <div className="roadmap-wrapper" data-aos="fade-in" data-aos-duration="1000">
                <Swiper
                  className='slider-7'
                  modules={[Navigation]}
                  spaceBetween={30}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1500: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  {
                    dataRoadmap.map(item => (
                      <SwiperSlide key={item.id}>
                        <div className={`roadmap-box ${item.status}`}>
                          <div className="icon">
                            <img src='/assets/images/common/icon_roadmap.svg' alt="" />
                          </div>
                          <div className="content">
                            <h6 className="date">{item.time}</h6>
                            <ul>
                              <li>{item.text1}</li>
                              <li>{item.text2}</li>
                              <li>{item.text3}</li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;