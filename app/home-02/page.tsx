import React from 'react';
import Layout from "@/components/layout/layout";
import Pagetitle2 from "@/components/sections/Pagetitle2";
import Feature1 from '@/components/sections/FeatureCard';
import RecommendProject from '@/components/sections/RecommendProject';
import Token2 from '@/components/sections/Token2';
import Tier from '@/components/sections/Tier';
import Technology from '@/components/sections/Technology';


const Home2 = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} >
        < Pagetitle2 />
        < Feature1 />
        < RecommendProject />
        < Token2 />
        < Tier />
        < Technology />
      </Layout>
    </>
  );
};

export default Home2;