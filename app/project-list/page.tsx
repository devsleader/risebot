'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainProjectListSection from '@/components/sections/MainProjectListSection';

const projectlist = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project list" >
        < MainProjectListSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default projectlist;