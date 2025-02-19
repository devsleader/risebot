'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import Token1 from '@/components/sections/Token1';
import MainTokenSection from '@/components/sections/MainTokenSection';


const token = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Token" >
        < Token1 />
        < MainTokenSection />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default token;