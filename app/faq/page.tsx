'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import Faqs from '@/components/sections/Faqs';
import Questions from '@/components/sections/Questions';
import FaqTop from '@/components/sections/FaqTop';
import Faq2 from '@/components/sections/Faq2';

const FAQ = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ" >
        < FaqTop />
        < Faq2 />
        < Faqs />
        < Questions />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default FAQ;