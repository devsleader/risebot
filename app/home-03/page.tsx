import React from 'react';
import Layout from "@/components/layout/layout";
import Pagetitle3 from '@/components/sections/Pagetitle3';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Featured2 from '@/components/sections/Featured2';
import CTA3 from '@/components/sections/CTA3';
import RecommendProject from '@/components/sections/RecommendProject';
import Faqs from '@/components/sections/Faqs';
import CTA1 from '@/components/sections/CTA1';
import Partner3 from '@/components/sections/Partner3';
import ThreeStepSection from '@/components/sections/ThreeStepSection';
import Partner4 from '@/components/sections/Partner4';

const Home3 = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} >
        < Pagetitle3 />
        < FeaturedProjects />
        < Featured2 />
        < CTA3 />
        < RecommendProject />
        < ThreeStepSection />
        < Partner4 />
        < Faqs />
        < Partner3 />
        < CTA1 img='girl' />
      </Layout>
    </>
  );
};

export default Home3;