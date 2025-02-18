import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainRegisterSection from '@/components/sections/MainRegisterSection';

const register = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} >
        < MainRegisterSection />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default register;