'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';

const projectGrid = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project 3" >
       
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default projectGrid;