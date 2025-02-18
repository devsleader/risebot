'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Define the interface for each partner item
interface PartnerItem {
  id: number;
  img: string;
}


// Define the partner data
const partners: PartnerItem[] = [
  { id: 1, img: "/assets/images/partner/01.png" },
  { id: 2, img: "/assets/images/partner/02.png" },
  { id: 3, img: "/assets/images/partner/03.png" },
  { id: 4, img: "/assets/images/partner/04.png" },
  { id: 5, img: "/assets/images/partner/05.png" },
  { id: 6, img: "/assets/images/partner/06.png" },
  { id: 7, img: "/assets/images/partner/07.png" },
  { id: 8, img: "/assets/images/partner/08.png" },
  { id: 9, img: "/assets/images/partner/09.png" },
  { id: 10, img: "/assets/images/partner/10.png" },
  { id: 11, img: "/assets/images/partner/11.png" },
  { id: 12, img: "/assets/images/partner/12.png" },
  { id: 13, img: "/assets/images/partner/13.png" },
  { id: 14, img: "/assets/images/partner/14.png" },
  { id: 15, img: "/assets/images/partner/15.png" },
  { id: 16, img: "/assets/images/partner/16.png" },
];

const Partner3 = () => { 
    return (
        <section className="tf-section supported"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title">
                                We are supported
                            </h2>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="container w_1710 brand_wrapper">
        <div className="row"> 
            <div className="col-md-12">
                <div className="brand">
                <Swiper
                className='slider-12'
                spaceBetween={0}
                slidesPerView={10}
        
            >
            {
                partners.map(item => (
                    <SwiperSlide key={item.id}>
                        <Link href="/home_v3" className="image">
                            <img src={item.img} alt="" />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
                </div>
            </div> 
        </div>
    </div>
        </section>  
    );
}
export default Partner3;