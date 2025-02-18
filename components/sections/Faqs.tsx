'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import of the Accordion component
const DynamicAccordion = dynamic(
  () => import('react-bootstrap-accordion').then((mod) => mod.Accordion),
  { ssr: false } // This will prevent server-side rendering
);

// Define the type for FAQ items
interface FaqItem {
  id: number;
  title: string;
  content: string;
  show?: boolean;
}

// Sample data array
const dataFaq: FaqItem[] = [
  {
    id: 1,
    title: 'What is the metaverse?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu'
  }, 
  {
    id: 2,
    title: 'How to access the metaverse?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu'
  },
  {
    id: 3,
    title: 'How do you make purchases in the metaverse?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu'
  },
  {
    id: 4,
    title: 'Is the metaverse fun?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu'
  },
  {
    id: 5,
    title: 'How do I find things to actually do in the metaverse?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu'
  },
  {
    id: 6,
    title: 'What is ownership in the metaverse?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu'
  },
];

const Faqs = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  return (
    <section className="tf-section FAQs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
              <h2 className="title">
                frequently asked questions
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
              {isBrowser && dataFaq.map(item => (
                <div className='flat-toggle' key={item.id}>
                  <DynamicAccordion title={item.title} show={item.show}>
                    <p className="toggle-content">{item.content}</p>
                  </DynamicAccordion>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <div className="content_faq text-center">
              <p>If you don`t find an answer, contact with our experts</p>
              <div className="wrap-btn">
                <Link href="/contact" className="tf-button style1">
                  get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;