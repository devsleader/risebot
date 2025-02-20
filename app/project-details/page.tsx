'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainProjectDetailsSection from '@/components/sections/MainProjectDetailsSection';
import MainProjectDetailsSection2 from '@/components/sections/MainProjectDetailsSection2';


const projectDetails = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details" >
        < MainProjectDetailsSection />
        < CTA1 img='girl' />
        <MainProjectDetailsSection2 />
      </Layout>
    </>
  );
};

export default projectDetails;