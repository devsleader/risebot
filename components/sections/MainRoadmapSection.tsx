import { Fascinate } from 'next/font/google';
import React from 'react';


interface RoadmapItem {
  date: string;
  items: string[];
  active: boolean;
}

const MainRoadmapSection = () => {
  // Left side roadmap items
  const leftRoadmapItems: RoadmapItem[] = [
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: true
    },
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: true
    },
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: false
    },
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: false
    }
  ];

  // Right side roadmap items
  const rightRoadmapItems: RoadmapItem[] = [
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: true
    },
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: true
    },
    {
      date: "April 16, 2022",
      items: [
        "Cras molestie ullamcorper augue nec pulvinar",
        "Nam mollis sapien ut sapien gravida sollicitudin",
        "Mauris vel nisl quis dolor accumsan luctus"
      ],
      active: false
    }
  ];

  // Function to render a roadmap item
  const renderRoadmapItem = (item: RoadmapItem, index: number) => {
    return (
      <div className={`roadmap-box-style ${item.active ? 'active' : ''}`} key={index}>
        <div className="icon">
          <img src='/assets/images/common/down.svg' alt="" />
        </div>
        <div className="content">
          <h6 className="date">{item.date}</h6>
          <ul>
            {item.items.map((listItem, idx) => (
              <li key={idx}>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className='inner-page'>
      <section className="tf-section roadmap">
        <div className="container">
          <div className="row"> 
            <div className="col-md-12"> 
              <div className="roadmap-wrapper-style2" data-aos="fade-up" data-aos-duration="1200">
                <div className="left">
                  {leftRoadmapItems.map(renderRoadmapItem)}
                </div>
                <div className="right">
                  {rightRoadmapItems.map(renderRoadmapItem)}
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainRoadmapSection;