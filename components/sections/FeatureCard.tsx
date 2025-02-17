'use client'
import Link from "next/link"
import React from "react"

// Define the type for our feature cards
interface FeatureCard {
  id: number;
  title: string;
  description: string;
  link: string;
}

// Define the type for our styles
interface StyleProps {
  [key: string]: React.CSSProperties;
}

const styles: StyleProps = {
  topPicture: {
    zIndex: 888,
    background: 'url(/_next/static/media/bg_img_team.1a81c964.png) center center no-repeat',
    top: -60,
    left: 90,
    width: '156px',
    height: '176px',
    margin: '0 auto',
    position: 'absolute',
  },
  content: {
    zIndex: 1,
  },
  marginTop20: {
    marginTop: "20px",
  },
  heightDescription: {
    height: "200px",
  }
};

const Feature1 = () => {
  // Feature cards data
  const featureCards: FeatureCard[] = [
    {
      id: 1,
      title: "Eco-Warrior",
      description: "A portion of Bubu's transactions is dedicated to forest conservation projects, protecting Bubu's home and the homes of his forest friends. This initiative has resonated deeply with environmentally conscious investors.",
      link: "/project-list"
    },
    {
      id: 2,
      title: "Bearish Humor",
      description: "Bubu's regular \"Bear Market Tips\" include advice such as \"Always invest in a good nap\" and \"Honey is the sweetest investment.\" His lighthearted take on the crypto market brings smiles and is a refreshing reminder not to take life too seriously.",
      link: "/project-list"
    },
    {
      id: 3,
      title: "Accessibility Advocate",
      description: "Bubu is on a mission to make crypto accessible to everyone, not just the tech-savvy. He simplifies complex crypto concepts into fun, easy-to-understand bear analogies, making him a favorite in educational crypto circles. Bubu is on a mission to make crypto accessible to everyone, not just the tech-savvy.",
      link: ""
    },
    {
      id: 4,
      title: "Community Builder",
      description: "Bubu hosts yearly \"Honey and Blockchain\" meetups in the forest, blending virtual activities with real-world conservation efforts. These events are not only a chance to learn about crypto but also a way to meet other community members and take part in preserving natural habitats.",
      link: "/project-list"
    },
    {
      id: 5,
      title: "Charismatic Leader",
      description: "Despite his accidental entry into crypto, Bubu's innate leadership qualities have shone through. He encourages open communication, shares his honey, and ensures all members feel welcome in the Bubu family",
      link: "/project-list"
    },
  ];

  // Get just the first 3 cards
  const displayedCards = featureCards.slice(0, 3);

  return (
    <>
      <section className="tf-section fueture">
        <div className="container w_1320">
          <div className="row">
            <div className="col-md-12">
              <div className="container_inner">
                <div className="row" data-aos="fade-in" data-aos-duration={1000}>
                  {displayedCards.map((card) => (
                    <div key={card.id} className="col-md-4 mb-4">
                      <div className="icon-box"> 
                          <div className="top">
                            <div className="content">
                              <h5 style={styles.marginTop20}>
                                <Link href={card.link}>{card.title}</Link>
                              </h5>
                              <p style={styles.heightDescription}>{card.description}</p>
                            </div>
                          </div>
                        
                        <div className="bottom">
                          <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                        </div>
                        <div className="number">{card.id}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="col-md-12 mt30">
                  <p className="desc text-center mb20">
                    Bubu the Bear continues to be more than just a meme coin mascot; he is a beacon of positivity in the often volatile crypto landscape. As Bubu navigates through the complexities of the market with naive grace and unintentional wisdom, his community grows stronger, bound by a shared love for crypto and conservation. 
                    Bubu isn't just a financial venture—it's a movement, a lifestyle, and a testament to the fact that even a bear can make a mark in the digital world.
                  </p>
                  <div className="wrap-btn justify-content-center">
                    <Link href="/submit-IGO-on-chain" className="tf-button style1">
                      JOIN US
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature1