'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import ProjectGrid5 from '@/components/sections/ProjectGrid5';

const projectGrid = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project 5" >
       < ProjectGrid5 />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default projectGrid;