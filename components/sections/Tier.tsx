'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TierItem {
  id: number;
  img: string;
  title: string;
  unit1: string;
  unit2: string;
  unit3: string;
  unit4: string;
}

const Tier = () => {
  // Use dynamic import for images in Next.js
  const [dataTier] = useState<TierItem[]>([
    {
      id: 1,
      img: '/assets/images/common/project_17.png',
      title: 'Basic',
      unit1: '$9,000',
      unit2: 'Lottery(20%)',
      unit3: 'Whitelist task',
      unit4: '03',
    },
    {
      id: 2,
      img: '/assets/images/common/project_18.png',
      title: 'Medium',
      unit1: '$20,000',
      unit2: 'Lottery(50%)',
      unit3: 'Whitelist task',
      unit4: '07',
    },
    {
      id: 3,
      img: '/assets/images/common/project_19.png',
      title: 'Advanced',
      unit1: '$30,000',
      unit2: 'Guaranteed',
      unit3: 'No',
      unit4: '14',
    },
    {
      id: 4,
      img: '/assets/images/common/project_20.png',
      title: 'Ultimate',
      unit1: '$40,000',
      unit2: 'Guaranteed',
      unit3: 'No',
      unit4: '24',
    },
  ]);

  const [dataTitle] = useState({
    title: 'Tier System',
  });

  return (
    <section className="tf-section tier_system">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tf-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="title mb20">{dataTitle.title}</h2>
            </div>
          </div>
          {dataTier.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="image-box">
                <div className="number">
                  <Image
                    src="/assets/images/backgroup/bg_box.png"
                    alt="Background"
                    width={100}
                    height={100}
                  />
                  <h6>Tiers #{item.id}</h6>
                </div>
                <div className="image">
                  <img
                    src={item.img}
                    alt={item.title}
                    
                  />
                </div>
                <div className="content">
                  <h6 className="name">
                    <Link href="/submit_igo">{item.title}</Link>
                  </h6>
                  <ul>
                    <li className="box bg_style">
                      <p>Staking Requirements</p>
                      <p className="price">{item.unit1}</p>
                    </li>
                    <li className="box">
                      <p>Allocation</p>
                      <p className="price">{item.unit2}</p>
                    </li>
                    <li className="box bg_style">
                      <p>Requirements</p>
                      <p className="price">{item.unit3}</p>
                    </li>
                    <li className="box">
                      <p>Pool weight</p>
                      <p className="price">{item.unit4}</p>
                    </li>
                  </ul>
                </div>
                <div className="wrapper_button">
                  <Link href="/submit_igo" className="tf-button style1">
                    <span>get started</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tier;