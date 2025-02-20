'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainSubmitProjectSection from '@/components/sections/MainSubmitProjectSection';

const submitproject = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Submit Project" >
       < MainSubmitProjectSection />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default submitproject;