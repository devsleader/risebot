import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';


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
interface RelatedPost {
    id: number;
    image: string;
    tag: string;
    title: string;
    excerpt: string;
}
interface SocialLink {
    id: number;
    url: string;
    svgPath: string;
}
interface Comment {
    id: number;
    avatar: string;
    name: string;
    date: string;
    text: string;
    isReply?: boolean;
}

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
// Related posts data
const relatedPosts: RelatedPost[] = [
    {
      id: 1,
      image: "/assets/images/post/post_26.png",
      tag: "Metaverse",
      title: "Tapping the Metaverse for...",
      excerpt: "The metaverse can help the healthcare fraternity by providing trainings on..."
    },
    {
      id: 2,
      image: "/assets/images/post/post_27.png",
      tag: "Metaverse",
      title: "People still don't know what metaverse is...",
      excerpt: "The metaverse can help the healthcare fraternity by providing trainings on..."
    },
    {
      id: 3,
      image: "/assets/images/post/post_28.png",
      tag: "Metaverse",
      title: "Microsoft brings animated avatars to ...",
      excerpt: "The metaverse can help the healthcare fraternity by providing trainings on..."
    }
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

const tags: string[] = ['NFTs', 'Blockchain', 'Coin', 'ICO', 'cryptocurrency', 'Token', 'Digital'];

// Social media links data
const socialLinks: SocialLink[] = [
{
    id: 1,
    url: "#",
    svgPath: "M3.07969 9.04002C3.01969 9.04002 1.69969 9.04002 1.09969 9.04002C0.779688 9.04002 0.679688 8.92002 0.679688 8.62002C0.679688 7.82002 0.679688 7.00002 0.679688 6.20002C0.679688 5.88002 0.799688 5.78002 1.09969 5.78002H3.07969C3.07969 5.72002 3.07969 4.56002 3.07969 4.02002C3.07969 3.22002 3.21969 2.46002 3.61969 1.76002C4.03969 1.04002 4.63969 0.560019 5.39969 0.280019C5.89969 0.100019 6.39969 0.0200195 6.93969 0.0200195H8.89969C9.17969 0.0200195 9.29969 0.14002 9.29969 0.42002V2.70002C9.29969 2.98002 9.17969 3.10002 8.89969 3.10002C8.35969 3.10002 7.81969 3.10002 7.27969 3.12002C6.73969 3.12002 6.45969 3.38002 6.45969 3.94002C6.43969 4.54002 6.45969 5.12002 6.45969 5.74002H8.77969C9.09969 5.74002 9.21969 5.86002 9.21969 6.18002V8.60002C9.21969 8.92002 9.11969 9.02002 8.77969 9.02002C8.05969 9.02002 6.51969 9.02002 6.45969 9.02002V15.54C6.45969 15.88 6.35969 16 5.99969 16C5.15969 16 4.33969 16 3.49969 16C3.19969 16 3.07969 15.88 3.07969 15.58C3.07969 13.48 3.07969 9.10002 3.07969 9.04002Z"
},
{
    id: 2,
    url: "#",
    svgPath: "M14 1.42062C13.4794 1.66154 12.9246 1.82123 12.3462 1.89877C12.9412 1.524 13.3954 0.935077 13.6089 0.225231C13.0541 0.574154 12.4416 0.820615 11.7889 0.958154C11.2621 0.366462 10.5114 0 9.69238 0C8.10337 0 6.82412 1.36062 6.82412 3.02862C6.82412 3.26862 6.84338 3.49938 6.89062 3.71908C4.5045 3.59631 2.39313 2.38985 0.97475 0.552C0.727125 1.00523 0.581875 1.524 0.581875 2.08246C0.581875 3.13108 1.09375 4.06062 1.85675 4.59877C1.39562 4.58954 0.94325 4.44831 0.56 4.22585C0.56 4.23508 0.56 4.24708 0.56 4.25908C0.56 5.73046 1.55487 6.95262 2.8595 7.23415C2.62587 7.30154 2.37125 7.33385 2.107 7.33385C1.92325 7.33385 1.73775 7.32277 1.56362 7.28215C1.9355 8.48123 2.99075 9.36277 4.2455 9.39138C3.269 10.1972 2.02912 10.6828 0.686875 10.6828C0.4515 10.6828 0.22575 10.6717 0 10.6412C1.27137 11.5062 2.77813 12 4.403 12C9.6845 12 12.572 7.38462 12.572 3.384C12.572 3.25015 12.5676 3.12092 12.5615 2.99262C13.1311 2.56615 13.6097 2.03354 14 1.42062Z"
},
{
    id: 3,
    url: "#",
    svgPath: "M14.0006 14.0002V8.87273C14.0006 6.35273 13.4581 4.42773 10.5181 4.42773C9.10062 4.42773 8.15563 5.19773 7.77063 5.93273H7.73563V4.65523H4.95312V14.0002H7.85813V9.36273C7.85813 8.13773 8.08563 6.96523 9.59063 6.96523C11.0781 6.96523 11.0956 8.34773 11.0956 9.43273V13.9827H14.0006V14.0002Z M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z"
}
];

// Comments data
const comments: Comment[] = [
{
    id: 1,
    avatar: "/assets/images/post/comment_1.png",
    name: "Annette Black",
    date: "February 18, 2022",
    text: "Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque."
},
{
    id: 2,
    avatar: "/assets/images/post/comment_2.png",
    name: "Darlene Robertson",
    date: "February 18, 2022",
    text: "Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque.",
    isReply: true
},
{
    id: 3,
    avatar: "/assets/images/post/comment_3.png",
    name: "Ronald Richards",
    date: "February 18, 2022",
    text: "Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque."
},
{
    id: 4,
    avatar: "/assets/images/post/comment_4.png",
    name: "Theresa Webb",
    date: "February 18, 2022",
    text: "Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque."
}
];




const MainBlogDetailsSection = () => {

  return (
    <div className='inner-page'>
      <section className="tf-section tf-blog pt60">
        <div className="container">
          <div className="row"> 
            <div className="side-bar">
              <div className="post-details">
                <h4 className="title">Meta unveils its much-hyped Quest Pro mixed reality headset at Meta Connect 2022, priced at $1,500</h4>
                <p className="date mb18"> 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                      <path d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.60218 2.15804 4.22064 2.43934 3.93934C2.72064 3.65804 3.10218 3.5 3.5 3.5H12.5C12.8978 3.5 13.2794 3.65804 13.5607 3.93934C13.842 4.22064 14 4.60218 14 5V12.5M2 12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5M2 12.5V7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6H12.5C12.8978 6 13.2794 6.15804 13.5607 6.43934C13.842 6.72064 14 7.10218 14 7.5V12.5" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg> 
                  February 18, 2022
                </p>
                <div className="spacing"></div>
                <div className="content-inner">
                  <ul className="social">
                    {socialLinks.map(link => (
                      <li key={link.id}>
                        <a href={link.url}>
                          <svg width={link.id === 1 ? "10" : "14"} height={link.id === 1 ? "16" : "14"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={link.svgPath} fill="#798DA3"/>
                          </svg> 
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="content-post">
                    <p className="sub-title">The launch is an important step for Zuckerberg, who last year announced plans for 
                      the device - then called Project Cambria - at the same time that he changed his company's 
                      name from Facebook to Meta to signal his intention to refocus the social 
                      media giant into a company that operates a shared immersive computing experience known as the metaverse.</p>
                    <div className="image">
                      <img src="/assets/images/post/post_25.png" alt="Meta Quest Pro" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <p>Meta Platforms unveiled its Quest Pro virtual and mixed reality headset on Tuesday, marking a milestone for Chief Executive Mark Zuckerberg's break into the higher-end market for extended reality computing devices.</p>
                    <p>The new headset, unveiled at Meta's annual Connect conference, will hit shelves on Oct 25 at a price of $1,500, and will offer consumers a way to interact with virtual creations overlaid onto a full-color view of the physical world around them.</p>
                    <p>The launch is an important step for Zuckerberg, who last year announced plans for the device - then called Project Cambria - at the same time that he changed his company's name from Facebook to Meta to signal his intention to refocus the social media giant into a company that operates a shared immersive computing experience known as the metaverse.</p>
                    <p>Zuckerberg has since poured billions of dollars into that vision. Reality Labs, the Meta unit responsible for bringing the metaverse to life, lost $10.2 billion in 2021 and has lost nearly $6 billion so far this year.</p>
                    <p>The Quest Pro features several upgrades over Meta's existing Quest 2 headset, which overwhelmingly dominates the consumer virtual reality market.</p>
                    <p>Most strikingly, it has outward-facing cameras that capture a sort of 3D livestream of the physical environment around a wearer, enabling mixed reality novelties like the ability to hang a virtual painting on a real-world wall or have a virtual ball bounce off a real table.</p>
                    <p>The Quest 2, by contrast, offers a more rudimentary grayscale version of this technology, called passthrough.</p>
                    <p>The Quest Pro is lighter and slimmer than its predecessors, with thin pancake lenses and a relocated battery that sits at the back of the headset, distributing its weight more evenly while reducing overall bulk.</p>
                    <p className="mb28">For fully immersive virtual reality, Meta has added tracking sensors to the Quest Pro that can replicate users' eye movements and facial expressions, creating a sense that avatars are making eye contact.</p>
                    <h5 className="title-st">Pitching productivity</h5>
                    <p>Meta is pitching the Quest Pro as a productivity device, aimed at designers, architects and other creative professionals.</p>
                    <p>In addition to offering its own Horizon social and workspace platforms, the company has also made virtual versions of Microsoft work products like Word, Outlook and Teams available.</p>
                    <p>At a preview of the device days before its launch, Meta gave reporters a glimpse of the type of user it had in mind by showcasing apps like Tribe XR, a virtual training environment for DJs learning how to use complex equipment.</p>
                    <div className="image mb12">
                      <img src="/assets/images/post/post_29.png" alt="Meta Quest Pro Application" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <p>Tribe XR is already available in virtual reality, but a demonstration showed how passthrough technology may enable DJs to use the app to play real-world gigs, as it means they can look out past their virtual equipment at actual partygoers.</p>
                    <p>Meta plans to sell the Quest Pro in consumer channels to start, while adding enterprise-level capabilities like mobile device management, authentication and premium support services next year, executives said at the press event.</p>
                    <p>They said the device is intended to complement rather than replace the entry-level Quest 2, which sells for $399.99.</p>
                    <p>For now, that means the Quest Pro stops short of enabling the complex commercial applications Meta has suggested it wants its metaverse tech to support.</p>
                    <p>The company is still working on a mixed reality experience for its Horizon Workrooms app that would make a person's avatar appear to be present in a real-world conference room with other users, which it is calling Magic Rooms.</p>
                    <p>Still, the Quest Pro's price point puts it well under the cost of existing enterprise-focused devices like Microsoft's Hololens 2, which was released for commercial use in 2019 and is already present in operating rooms and on factory floors.</p>
                    <p>An entry-level Hololens 2 sells for $3,500.</p>
                    <div className="spacing mg28"></div>
                    <ul className="tag mb30">
                      <li>Tags:</li>
                      {tags.map((tag, index) => (
                        <li key={index}><span>{tag}</span></li>
                      ))}
                    </ul>
                  </div> 
                </div>
                <div className="related-post">
                  <h4 className="title">Related post</h4>
                  <div className="wrapper-related-post">
                    {relatedPosts.map(post => (
                      <div className="grid-box" key={post.id}>
                        <div className="image">
                          <img src={post.image} alt={post.title} />
                        </div>
                        <div className="content">
                          <a href="#" className="tag">{post.tag}</a>
                          <h5 className="title"><a href="#">{post.title}</a></h5>
                          <p>{post.excerpt}</p>
                        </div>
                        <a href="#" className="tf-button style1">
                          Read more
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="comment">
                  <h4>Comment ({comments.length})</h4>
                  
                  {comments.map(comment => (
                    <div className={`comment-box${comment.isReply ? " rep" : ""}`} key={comment.id}>
                      <div className="avt">
                        <img src={comment.avatar} alt={comment.name} />
                      </div>
                      <div className="info">
                        <h6 className="name">{comment.name}</h6>
                        <p className="meta">{comment.date}</p>
                        <p className="text">{comment.text}</p>
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  ))}
                </div>
                <form action="#">
                  <div className="project-info-form">
                    <h4 className="title">Leave a reply</h4>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <div className="spacing"></div> 
                    <div className="form-inner">
                      <fieldset>
                        <label>
                          Your name *
                        </label>
                        <input type="text" placeholder="Enter the name of your project" required />
                      </fieldset>
                      <fieldset>
                        <label>
                          Your email *
                        </label>
                        <input type="email" placeholder="Your email" required />
                      </fieldset> 
                      <fieldset>
                        <label htmlFor="message">
                          Your comment
                        </label>
                        <textarea 
                          placeholder="Tell us about the project you wan to launch" 
                          rows={5} 
                          tabIndex={4} 
                          name="message" 
                          className="message" 
                          id="message" 
                          required>
                        </textarea>
                      </fieldset> 
                    </div> 
                  </div> 
                  <div className="wrap-btn justify-content-center">
                    <button type="submit" className="tf-button style1">
                      Submit comment
                    </button>
                  </div>
                </form>
              </div>
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
};

export default MainBlogDetailsSection;