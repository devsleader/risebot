import React from 'react';
import Layout from "@/components/layout/layout";
import Pagetitle1 from "@/components/sections/Pagetitle1";
import Project1 from "@/components/sections/Project1";
import ProjectSlider from "@/components/sections/ProjectSlider";
import Join from '@/components/sections/Join';
import AllProject from '@/components/sections/AllProject';
import Team1 from '@/components/sections/Team1';
import Partner1 from '@/components/sections/Partner1';
import CTA1 from '@/components/sections/CTA1';

const Home = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} >
        < Pagetitle1 />
        < Project1 />
        < ProjectSlider />
        < Join />
        < AllProject />
        < Team1 />
        < Partner1 />
        < CTA1 />
      </Layout>
    </>
  );
};

export default Home;