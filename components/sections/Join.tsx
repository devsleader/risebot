import Link from "next/link";

interface JoinStep {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  buttonImageSrc: string;
  link: string;
}

const joinStepsData: JoinStep[] = [
  {
    id: 1,
    title: "Submit KYC",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.",
    imageSrc: "/assets/images/common/project_5.png",
    buttonImageSrc: "/assets/images/common/button_project.svg",
    link: "#"
  },
  {
    id: 2,
    title: "Verify Wallet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.",
    imageSrc: "/assets/images/common/project_6.png",
    buttonImageSrc: "/assets/images/common/button_project.svg",
    link: "#"
  },
  {
    id: 3,
    title: "Start Staking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.",
    imageSrc: "/assets/images/common/project_7.png",
    buttonImageSrc: "/assets/images/common/button_project.svg",
    link: "#"
  }
];

const Join: React.FC = () => {
  return (
    <section className="tf-section project_3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div 
              className="tf-title" 
              data-aos="fade-up" 
              data-aos-duration={800}
            >
              <h2 className="title">
                Easy to join IGO <br className="show-destop" /> with 3 steps
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="project-box-style2_wrapper">
              {joinStepsData.map((step, index) => (
                <div 
                  key={step.id}
                  className="project-box-style2" 
                  data-aos="fade-up" 
                  data-aos-delay={(index + 1) * 100} 
                  data-aos-duration={800}
                >
                  <div className="image">
                    <img src={step.imageSrc} alt={step.title} />
                  </div>
                  <div className="content">
                    <h5>{step.title}</h5>
                    <p className="desc">{step.description}</p>
                    <p className="number">{String(step.id).padStart(2, '0')}</p>
                  </div>
                  <Link href={step.link} className="btn_project">
                    <img src={step.buttonImageSrc} alt="Button" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;