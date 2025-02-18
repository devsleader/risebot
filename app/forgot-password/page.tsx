import React from 'react';
import Layout from "@/components/layout/layout";
import CTA1 from '@/components/sections/CTA1';
import MainForgotPasswordSection from '@/components/sections/MainForgotPasswordSection';


const forgotpassword = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} >
        < MainForgotPasswordSection/>
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default forgotpassword;