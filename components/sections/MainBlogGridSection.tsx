import Link from 'next/link';
import { useState } from 'react';

// Define the blog post type
interface BlogPost {
  id: number;
  img: string;
  heading: string;
  cate: string;
  text: string;
}

const dataBlog: BlogPost[] = [
  {
    id: 1,
    img: '/assets/images/post/post_1.jpg',
    heading: 'Decoded: Metaverse and the future of banking',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 2,
    img: '/assets/images/post/post_2.jpg',
    heading: 'Tapping the Metaverse for immersive service',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 3,
    img: '/assets/images/post/post_3.jpg',
    heading: 'JetSynthesys to invest $50 million to build metaverse...',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 4,
    img: '/assets/images/post/post_4.jpg',
    heading: 'Creating a constitutional framework for metaverse',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 5,
    img: '/assets/images/post/post_5.jpg',
    heading: 'Disney CEO lays out early plan for digital future',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 6,
    img: '/assets/images/post/post_6.jpg',
    heading: 'Shemaroo to partner with Seracle for Web3 foray',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 7,
    img: '/assets/images/post/post_7.jpg',
    heading: 'New VR jobs die down at Meta, Google amid hiring freeze...',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 8,
    img: '/assets/images/post/post_8.jpg',
    heading: 'Digital India Act to police social media and OTT platforms',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 9,
    img: '/assets/images/post/post_9.jpg',
    heading: 'Meta raises $10 billion in first-ever bond offering',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 10,
    img: '/assets/images/post/post_1.jpg',
    heading: 'Decoded: Metaverse and the future of banking',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 11,
    img: '/assets/images/post/post_2.jpg',
    heading: 'Tapping the Metaverse for immersive service',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 12,
    img: '/assets/images/post/post_3.jpg',
    heading: 'JetSynthesys to invest $50 million to build metaverse...',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 13,
    img: '/assets/images/post/post_4.jpg',
    heading: 'Creating a constitutional framework for metaverse',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 14,
    img: '/assets/images/post/post_5.jpg',
    heading: 'Disney CEO lays out early plan for digital future',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 15,
    img: '/assets/images/post/post_6.jpg',
    heading: 'Shemaroo to partner with Seracle for Web3 foray',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 16,
    img: '/assets/images/post/post_7.jpg',
    heading: 'New VR jobs die down at Meta, Google amid hiring freeze...',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 17,
    img: '/assets/images/post/post_8.jpg',
    heading: 'Digital India Act to police social media and OTT platforms',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 18,
    img: '/assets/images/post/post_9.jpg',
    heading: 'Meta raises $10 billion in first-ever bond offering',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 19,
    img: '/assets/images/post/post_1.jpg',
    heading: 'Decoded: Metaverse and the future of banking',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 20,
    img: '/assets/images/post/post_2.jpg',
    heading: 'Tapping the Metaverse for immersive service',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 21,
    img: '/assets/images/post/post_3.jpg',
    heading: 'JetSynthesys to invest $50 million to build metaverse...',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 22,
    img: '/assets/images/post/post_4.jpg',
    heading: 'Creating a constitutional framework for metaverse',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 23,
    img: '/assets/images/post/post_5.jpg',
    heading: 'Disney CEO lays out early plan for digital future',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 24,
    img: '/assets/images/post/post_6.jpg',
    heading: 'Shemaroo to partner with Seracle for Web3 foray',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 25,
    img: '/assets/images/post/post_7.jpg',
    heading: 'New VR jobs die down at Meta, Google amid hiring freeze...',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 26,
    img: '/assets/images/post/post_8.jpg',
    heading: 'Digital India Act to police social media and OTT platforms',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {
    id: 27,
    img: '/assets/images/post/post_9.jpg',
    heading: 'Meta raises $10 billion in first-ever bond offering',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
];

const MainBlogGridSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataBlog.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(dataBlog.length / postsPerPage);

  return (
    <div className="inner-page">
      <section className="tf-section tf-blog pt60">
        <div className="container">
          <div className="row">
            {currentPosts.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-12">
                <div className="grid-box">
                  <div className="image">
                    <img 
                      src={item.img}
                      alt={item.heading}
                    />
                  </div>
                  <div className="content">
                    <Link href={`/blog/${item.id}`} className="tag">
                      {item.cate}
                    </Link>
                    <h5 className="title">
                      <Link href={`/blog/${item.id}`}>{item.heading}</Link>
                    </h5>
                    <p>{item.text}</p>
                  </div>
                  <Link href={`/blog/${item.id}`} className="tf-button style1">
                    Read more
                  </Link>
                </div>
              </div>
            ))}

            <div className="col-md-12">
              <ul className="panigation" data-aos="fade-up" data-aos-duration="800">
                <li>
                  <Link href="#" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1L1.5 6L6.5 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index + 1}>
                    <Link href="#" className={currentPage === index + 1 ? 'active' : ''} onClick={() => setCurrentPage(index + 1)}>
                      {index + 1}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#" onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}>
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1L6.5 6L1.5 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MainBlogGridSection;