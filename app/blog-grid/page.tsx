'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainBlogGridSection from '@/components/sections/MainBlogGridSection';

const  bloggrid= () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Blogs" >
        < MainBlogGridSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default bloggrid;