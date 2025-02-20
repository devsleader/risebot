'use client'
import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainConnectWalletSection from '@/components/sections/MainConnectWalletSection';

const  connet= () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Connect Wallet" >
        < MainConnectWalletSection />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default connet;