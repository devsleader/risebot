'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainBlogDetailsSection from '@/components/sections/MainBlogDetailsSection';

const  blog= () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details" >
        < MainBlogDetailsSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default blog;