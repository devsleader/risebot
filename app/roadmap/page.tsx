'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainRoadmapSection from '@/components/sections/MainRoadmapSection';

const  roadmap= () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Discover potential projects" >
        < MainRoadmapSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default roadmap;