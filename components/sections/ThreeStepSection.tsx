import React from "react";
interface StepData {
  id: number;
  img: string;
  title: string;
  text: string;
}

const ThreeStepSection = () => {
  const dataStep: StepData[] = [
    {
      id: 1,
      img: '/assets/images/common/icon_9.png',
      title: 'Submit KYC',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.'
    },
    {
      id: 2,
      img: '/assets/images/common/icon_10.png',
      title: 'Verify Wallet',
      text: 'Etiam nisi libero, sodales sit amet justo ac, suscipit maximus metus. Semper nec interdum nec, faucibus id dui sit amet congue'
    },
    {
      id: 3,
      img: '/assets/images/common/icon_11.png',
      title: 'Start Staking',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.'
    },
  ];

  return (
    <section className="tf-section three_step pt-12">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tf-title mb46 left" data-aos="fade-up" data-aos-duration="800">
              <h2 className="title">
                Easy to join IGO <br className="show-destop" />
                with 3 steps
              </h2>
            </div>
            <div className="wrap-box">
              {
                dataStep.map(item => (
                  <div key={item.id} className="icon-box-style3">
                    <div className="icon">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <h5 className="title">{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                    <img className="icon_bottom" src='/assets/images/common/Line.png' alt="" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-md-6">
            <div className="image pt30">
              <img src='/assets/images/common/img_step.png' className="move5" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepSection;