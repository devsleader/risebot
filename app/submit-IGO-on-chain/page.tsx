'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import Faqs from '@/components/sections/Faqs';
import Partner2 from '@/components/sections/Partner2';
import CTA2 from '@/components/sections/CTA2';
import SubmitIGO from '@/components/sections/SubmitIGO';

const SUbmitChain = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Submit IGO on Chain" >
        < SubmitIGO />
        < Partner2 />
        < CTA2 />
        < Faqs />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default SUbmitChain;