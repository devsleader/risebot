'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainContactSection from '@/components/sections/MainContactSection';

const contact = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us" >
        < MainContactSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default contact;