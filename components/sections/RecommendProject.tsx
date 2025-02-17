'use client'
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  minAllocation: string;
  maximum: string;
  access: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, minAllocation, maximum, access }) => {
  return (
    <div className="project-box-style4">
      <div className="image">
        <div className="img_inner">
          <img src={image} alt="" />
          <img className="shape" src="/assets/images/common/shap.png" alt="" />
        </div>
        <div className="label">
          1ST Phase
        </div>
      </div>
      <div className="content">
        <h5 className="heading"><Link href="/project-grid">{title}</Link></h5>
        <p className="desc">{description}</p>
        <ul>
          <li>
            <p className="text">Min allocation</p>
            <p className="price">{minAllocation}</p>
          </li>
          <li>
            <p className="text">Maximum</p>
            <p className="price">{maximum}</p>
          </li>
          <li>
            <p className="text">Access</p>
            <p className="price">{access}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function RecommendProject() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  
  const handleOnClick = (index: number) => {
    setActiveIndex(index);
  };

  // Project data for mapping
  const projectData: ProjectCardProps[] = [
    {
      image: "/assets/images/common/project_2.png",
      title: "Oddmar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
      minAllocation: "0.01",
      maximum: "TBA",
      access: "Public"
    },
    {
      image: "/assets/images/common/project_3.png",
      title: "Fruit Ninja",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
      minAllocation: "0.01",
      maximum: "TBA",
      access: "Public"
    },
  ];

  // Add upcoming projects data
  const projectDataUpcoming: ProjectCardProps[] = [
    {
      image: "/assets/images/common/project_2.png",
      title: "New Adventure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
      minAllocation: "0.02",
      maximum: "TBA",
      access: "Public"
    },
    {
      image: "/assets/images/common/project_3.png",
      title: "Space Odyssey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
      minAllocation: "0.03",
      maximum: "TBA",
      access: "Public"
    },
  ];

  // Add ended projects data
  const projectDataEnded: ProjectCardProps[] = [
    {
      image: "/assets/images/common/project_2.png",
      title: "Old Legends",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
      minAllocation: "0.01",
      maximum: "TBA",
      access: "Public"
    },
    {
      image: "/assets/images/common/project_3.png",
      title: "Final Frontier",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque",
      minAllocation: "0.01",
      maximum: "TBA",
      access: "Public"
    },
  ];

  return (
    <>
      <section className="tf-section project">
        <div className="container w_1280">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title mb20" data-aos="fade-up" data-aos-duration={800}>
                <h2 className="title">
                  projects we recommend
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="flat-tabs" data-aos="fade-up" data-aos-duration={1000}>
                <ul className="menu-tab">
                  <li className={activeIndex === 1 ? "active" : ""} onClick={() => handleOnClick(1)}><span>oncoming</span></li>
                  <li className={activeIndex === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><span>Upcoming</span></li>
                  <li className={activeIndex === 3 ? "active" : ""} onClick={() => handleOnClick(3)}><span>ended</span></li>
                </ul>
                <div className="content-tab">
                  <div className="content-inner" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
                    <div className="container_inner">
                      <div className="row" data-aos="fade-in" data-aos-duration={1000}>
                        {projectData.map((project, index) => (
                          <div className="col-md-6 mb-4" key={index}>
                            <ProjectCard 
                              image={project.image}
                              title={project.title}
                              description={project.description}
                              minAllocation={project.minAllocation}
                              maximum={project.maximum}
                              access={project.access}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="content-inner" style={{ display: `${activeIndex === 2 ? "block" : "none"}` }}>
                  <div className="container_inner">
                      <div className="row" data-aos="fade-in" data-aos-duration={1000}>
                        {projectDataUpcoming.map((project, index) => (
                          <div className="col-md-6 mb-4" key={index}>
                            <ProjectCard 
                              image={project.image}
                              title={project.title}
                              description={project.description}
                              minAllocation={project.minAllocation}
                              maximum={project.maximum}
                              access={project.access}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="content-inner" style={{ display: `${activeIndex === 3 ? "block" : "none"}` }}>
                  <div className="container_inner">
                      <div className="row" data-aos="fade-in" data-aos-duration={1000}>
                        {projectDataEnded.map((project, index) => (
                          <div className="col-md-6 mb-4" key={index}>
                            <ProjectCard 
                              image={project.image}
                              title={project.title}
                              description={project.description}
                              minAllocation={project.minAllocation}
                              maximum={project.maximum}
                              access={project.access}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}