'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainTeamDetailsSection from '@/components/sections/MainTeamDetailsSection';


const team = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details" >
        < MainTeamDetailsSection />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default team;