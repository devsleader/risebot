import React from 'react';

// Define an interface for the featured item
interface FeaturedItem {
  id: number;
  img: string;
  title: string;
  text: string;
}

const Featured2 = () => {

  const dataFeatured: FeaturedItem[] = [
    {
      id: 1,
      img: '/assets/images/common/icon_4.png',
      title: 'A virtual world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.',
    },
    {
      id: 2,
      img: '/assets/images/common/icon_5.png',
      title: 'Virtual reality',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.',
    },
    {
      id: 3,
      img: '/assets/images/common/icon_6.png',
      title: 'Other people',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.',
    },
    {
      id: 4,
      img: '/assets/images/common/icon_7.png',
      title: 'Persistence',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.',
    },
    {
      id: 5,
      img: '/assets/images/common/icon_8.png',
      title: 'Connect with the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.',
    },
  ];

  return (
    <section className="tf-section features">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
              <h2 className="title">
                We have outstanding technology <br className="show-destop" /> and features
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="wrapper-box">
              {dataFeatured.map(item => (
                <div key={item.id} className="icon-box-style2">
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content">
                    <h5 className="title">{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured2;