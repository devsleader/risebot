import React from 'react';
import Layout from "@/components/layout/layout";
import Pagetitle2 from "@/components/sections/Pagetitle2";
import Feature1 from '@/components/sections/FeatureCard';
import RecommendProject from '@/components/sections/RecommendProject';
import Token2 from '@/components/sections/Token2';
import Tier from '@/components/sections/Tier';
import Technology from '@/components/sections/Technology';
import Roadmap from '@/components/sections/Roadmap'
import Team from '@/components/sections/Team';
import CTA1 from '@/components/sections/CTA1';
import Partner2 from '@/components/sections/Partner2';
import CTA2 from '@/components/sections/CTA2';
import Faqs from '@/components/sections/Faqs';

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
        < Roadmap />
        < Team />
        < Partner2 />
        < CTA2 />
        < Faqs />
        < CTA1 img='boy' />
      </Layout>
    </>
  );
};

export default Home2;