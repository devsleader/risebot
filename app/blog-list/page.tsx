'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainBlogListSection from '@/components/sections/MainBlogListSection'

const  bloglist= () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Discover potential projects" >
        < MainBlogListSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default bloglist;