import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainLoginSection from '@/components/sections/MainLoginSection';

const login = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} >
        < MainLoginSection />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default login;