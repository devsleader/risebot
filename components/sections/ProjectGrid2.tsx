'use client';

import React,  {useState} from 'react';
import {  Tabs,  TabPanel } from 'react-tabs';
import Image from 'next/image';
import Link from 'next/link';

interface TabData {
    id: number;
    title: string;
}

const dataProject = [
  {
    id: 6, 
    img: '/assets/images/common/project_1.png',
    title: "Zombie plant 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
    price_1: "100K",
    price_2: "23M",
    price_3: "$0",
  },  
  {
    id: 7, 
    img: '/assets/images/common/project_2.png',
    title: "Zombie plant 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
    price_1: "100K",
    price_2: "23M",
    price_3: "$0",
  },  
  {
    id: 8, 
    img: '/assets/images/common/project_3.png',
    title: "Zombie plant 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
    price_1: "100K",
    price_2: "23M",
    price_3: "$0",
  },  
  {
    id: 9, 
    img: '/assets/images/common/project_4.png',
    title: "Iron Blade",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
    price_1: "100K",
    price_2: "23M",
    price_3: "$0",
  },  
  {
    id: 10, 
    img: '/assets/images/common/project_1.png',
    title: "Zombie plant 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
    price_1: "100K",
    price_2: "23M",
    price_3: "$0",
  }
];

function ProjectGrid2() {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [dataTab] = useState<TabData[]>([
        {
            id: 1,
            title: 'Open IGO',
        },
        {
            id: 2,
            title: 'Upcoming',
        },
        {
            id: 3,
            title: 'Past IGO',
        },
    ]);

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
    };
    
  return (
    <div className='inner-page'>
      <section className="tf-section project">
        <div className="container">
          <div className="row"> 
            <div className="col-md-12">
              <div className="flat-tabs" data-aos="fade-up" data-aos-duration="1000">
                <Tabs>
                <div className="wrapper_menutab">
                                            <ul className="menu-tab wrapper">
                                                {dataTab.map((idx: TabData) => (
                                                    <li className={activeIndex === idx.id ? "active" : ""} onClick={() => handleOnClick(idx.id)} key={idx.id}>
                                                        <span>{idx.title}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="seclect-box" data-aos="fade-in" data-aos-duration={800}>
                                                <div className="dropdown selector-drop" id="category">
                                                    <Link href="#" className="btn-selector btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="boder" />All access
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="dropdown-item active" data-toggle="modal" data-target="#delete_client">Forgotten Samurai</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Star Batter</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Calvary Deneral</li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown selector-drop" id="artworks">
                                                    <Link href="#" className="btn-selector btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="boder" />All Block Chain
                                                    </Link>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li className="dropdown-item active" data-toggle="modal" data-target="#delete_client">Sort by Popularity</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Sort by Latest</li>
                                                        <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Sort by View</li>
                                                    </ul>
                                                </div>
                                            </div>
                                </div>

                    
                  {dataTab.map(idx => (
                    <TabPanel key={idx.id} className='content-tab mt40'>
                      <div className="content-inner project-box-style6_wrapper">
                        {dataProject.map(item => (
                          <div key={item.id} className="content-inner project-box-style4">
                            <div className="image">
                              <div className="img_inner">
                                <Image 
                                  src={item.img} 
                                  alt={item.title} 
                                  width={500}
                                  height={300}
                                  priority
                                />
                                <Image 
                                  className='shape' 
                                  src={'/assets/images/common/shape.png'} 
                                  alt="Risebot"
                                  width={100}
                                  height={100} 
                                />
                              </div>
                              <div className="label">
                                1ST Phase
                              </div>
                            </div>
                            <div className="content">
                              <h5 className="heading">
                                <Link href="/project_v1">{item.title}</Link>
                              </h5>
                              <p className="desc">{item.desc}</p>
                              <ul>
                                <li>
                                  <p className="text">Min allocation</p>
                                  <p className="price">{item.price_1}</p>
                                </li>
                                <li>
                                  <p className="text">Maximum</p>
                                  <p className="price">{item.price_2}</p>
                                </li>
                                <li>
                                  <p className="text">Access</p>
                                  <p className="price">{item.price_3}</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </Tabs> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectGrid2;