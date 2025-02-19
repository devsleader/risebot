import Link from 'next/link';
import { Search } from 'lucide-react';

interface BlogPost {
  id: number;
  img: string;
  heading: string;
  cate: string;
  text: string;
}

interface RecentPost {
  id: number;
  image: string;
  date: string;
  title: string;
}
interface Category {
    name: string;
    count: number;
}
const dataBlog: BlogPost[] = [
  {
    id: 0,
    img: '/assets/images/post/post_10.png',
    heading: 'Now Shemaroo offers movie theatre on metaverse',
    cate: 'IGOs',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
  },
  {   
    id: 11,
    img: '/assets/images/post/post_11.png',
    heading: 'Skepticism, confusion, frustration: Inside Mark Zuckerbergs metaverse struggles',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 12,
    img: '/assets/images/post/post_12.png',
    heading: 'Tencent shifts focus to majority deals, overseas gaming assets for growth: sources',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 13,
    img: '/assets/images/post/post_13.png',
    heading: 'Meta working to speed up metaverse, but success far from certain',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 14,
    img: '/assets/images/post/post_14.png',
    heading: 'Microsoft brings animated avatars to Teams in metaverse push',
    cate: 'Crypto Trade',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 15,
    img: '/assets/images/post/post_15.png',
    heading: 'Tapping the Metaverse for immersive service',
    cate: 'Web 3.0',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 16,
    img: '/assets/images/post/post_16.png',
    heading: 'Translucia forays into India market, to build $ 3 billion worth metaverses through...',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 17,
    img: '/assets/images/post/post_17.png',
    heading: 'People still dont know what metaverse is all about: Tim Cook',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 18,
    img: '/assets/images/post/post_18.png',
    heading: 'Tencent shifts focus to majority deals, overseas gaming assets for growth: sources',
    cate: 'Metaverse',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
{
    id: 19,
    img: '/assets/images/post/post_19.png',
    heading: 'Together Labs subsidiary announces close of VCORE presale',
    cate: 'Farming',
    text: 'The metaverse can help the healthcare fraternity by providing trainings on understanding medical tools and...'
}, 
];

const recentPosts: RecentPost[] = [
  {
    id: 1,
    image: '/assets/images/post/post_20.png',
    date: 'February 18, 2022',
    title: "Meta Is Still Betting on a VR Revolution That May Never Come"
  },
  {
    id: 2,
    image: '/assets/images/post/post_21.png',
    date: 'February 18, 2022',
    title: "Meta's VR Headset Harvests Personal Data Right Off Your..."
  },
  {
    id: 3,
    image: '/assets/images/post/post_22.png',
    date: 'February 18, 2022',
    title: "VR Still Stinks Because It Doesn't Smell"
  },
  {
    id: 4,
    image: '/assets/images/post/post_23.png',
    date: 'February 18, 2022',
    title: "How China Threatens to Splinter the Metaverse"
  },
  {
    id: 5,
    image: '/assets/images/post/post_24.png',
    date: 'February 18, 2022',
    title: "It's Not Too Late to Save the Metaverse"
  },

];

const categories: Category[] = [
  { name: 'Metaverse', count: 18 },
  { name: 'Web 3.0', count: 57 },
  { name: 'Farming', count: 5 },
  { name: 'IGOs', count: 9 },
  { name: 'Launchpad', count: 3 },
  { name: 'Staking', count: 81 },
  { name: 'Crypto Trade', count: 42 }
];

const tags = ['NFTs', 'Blockchain', 'Coin', 'ICO', 'cryptocurrency', 'Token', 'Digital'];

 function MainBlogListSection() {
  return (
    <div className="inner-page">
      <section className="tf-section tf-blog pt60">
        <div className="container">
          <div className="row">
            <div className="side-bar">
              {dataBlog.map(item => (
                <div key={item.id} className="grid-box-style2" data-aos="fade-up" data-aos-duration="800">
                  <div className="image">
                    <img 
                      src={item.img}
                      alt={item.heading}
                      loading={item.id === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="content">
                    <Link href={`/blog/${item.id}`} className="tag">{item.cate}</Link>
                    <h5 className="title">
                      <Link href={`/blog/${item.id}`}>{item.heading}</Link>
                    </h5>
                    <p>{item.text}</p>
                  </div>
                  <Link href={`/blog/${item.id}`} className="tf-button style1">
                    Read more
                  </Link>
                </div>
              ))}

              <ul className="panigation justify-content-start" data-aos="fade-up" data-aos-duration="800">
                <li>
                  <Link href="#" className="ml0">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 1L1.5 6L6.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </li>
                <li><Link href="#" className="active">1</Link></li>
                <li><Link href="#">2</Link></li>
                <li><Link href="#">3</Link></li>
                <li>
                  <Link href="#">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 1L6.5 6L1.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <article className="article">
              <form action="#" className="form-seach mb33 relative">
                <input type="text" placeholder="Search..." className="w-full" />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" size={20} />
              </form>

              <div className="widget">
                <h6 className="widget-title-st2">Categories</h6>
                <ul className="widget-category">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link href={`/blog/category/${category.name.toLowerCase()}`}>
                        {category.name} <span>({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget mb33">
                <h6 className="widget-title-st2">Recent Posts</h6>
                <ul className="widget-recenpost">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <div className="recent-posts">
                        <div className="image">
                          <img 
                            src={post.image}
                            alt={post.title}
                          />
                        </div>
                        <div className="content">
                          <Link href="/blog/details" className="date flex items-center gap-2">
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.9375 1.25V2.5625M9.0625 1.25V2.5625M0.75 10.4375V3.875C0.75 3.5269 0.888281 3.19306 1.13442 2.94692C1.38056 2.70078 1.7144 2.5625 2.0625 2.5625H9.9375C10.2856 2.5625 10.6194 2.70078 10.8656 2.94692C11.1117 3.19306 11.25 3.5269 11.25 3.875V10.4375M0.75 10.4375C0.75 10.7856 0.888281 11.1194 1.13442 11.3656C1.38056 11.6117 1.7144 11.75 2.0625 11.75H9.9375C10.2856 11.75 10.6194 11.6117 10.8656 11.3656C11.1117 11.1194 11.25 10.7856 11.25 10.4375M0.75 10.4375V6.0625C0.75 5.7144 0.888281 5.38056 1.13442 5.13442C1.38056 4.88828 1.7144 4.75 2.0625 4.75H9.9375C10.2856 4.75 10.6194 4.88828 10.8656 5.13442C11.1117 5.38056 11.25 5.7144 11.25 6.0625V10.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{post.date}</span>
                          </Link>
                          <Link href="/blog/details" className="title">{post.title}</Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget mb22">
                <h6 className="widget-title-st2">Popular Tags</h6>
                <ul className="widget-tag mr-10">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <Link href={`/blog/tag/${tag.toLowerCase()}`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="img-box relative">
                <div className="overlay absolute inset-0"></div>
                <h3 className="text-2xl font-bold mb-2">
                  Launch <br />on Risebot
                </h3>
                <p>Full support in project incubation</p>
                <div className="wrap-btn">
                  <Link href="/submit-igo" className="tf-button style2">
                    Apply now
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MainBlogListSection;